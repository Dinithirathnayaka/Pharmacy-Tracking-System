const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  role: {
    type: String,
    enum: ["doctor", "patient", "pharmacist"],
    required: true,
  },
  doctor: {
    regi_no: {
      type: String,
      unique: true,
      sparse: true,
    },
    specific_area: String,
    isVerified: {
      type: Boolean,
      default: false,
    },
    emailToken: {
      type: String,
    },
  },
  pharmacist: {
    register_no: {
      type: String,
      unique: true,
      sparse: true,
    },
    pharmacyName: {
      type: String,
      required: false,
    },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        required: false,
      },
      coordinates: {
        type: [Number],
        required: false,
      },
    },
  },
});

userSchema.pre("save", async function (next) {
  if (this.role === "patient") {
    this.doctor = undefined;
    this.pharmacist = undefined;
  } else if (this.role === "doctor") {
    this.pharmacist = undefined;
  } else if (this.role === "pharmacist") {
    this.doctor = undefined;
  }
  next();
});

userSchema.statics.signup = async function (
  username,
  email,
  password,
  role,
  roleData
) {
  if (!email || !password || !username || !role) {
    throw Error("All fields must be filled");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }

  if (!validator.isStrongPassword(password, { minLength: 6 })) {
    throw Error("Password not strong enough");
  }

  const existsEmail = await this.findOne({ email });

  if (existsEmail) {
    throw Error("Email already in use");
  }

  const existsUsername = await this.findOne({ username });

  if (existsUsername) {
    throw Error("Username already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const userData = { email, username, password: hash, role };

  if (role === "pharmacist") {
    userData.pharmacist = roleData;
  }

  if (role === "doctor") {
    userData.doctor = roleData;
  }

  const user = await this.create(userData);

  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect Email");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
