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
    validate: {
      validator: validator.isEmail,
      message: "Email is not valid",
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    validate: {
      validator: (value) => {
        return validator.isStrongPassword(value, {
          minLength: 6, // Adjust this to your password strength requirements
        });
      },
      message: "Password not strong enough",
    },
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
  },
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

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const userData = { email, username, password: hash, role };

  if (role === "doctor") {
    userData.doctor = roleData;
  } else if (role === "pharmacist") {
    userData.pharmacist = roleData;
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
