const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { sendMail } = require("../utils/sendMail");

const createToken = (_id, role) => {
  return jwt.sign({ _id, role }, process.env.SECRET, { expiresIn: "3d" });
};

//LOGIN user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    //create token
    const token = createToken(user._id, user.role);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//SIGNUP user
const signupUser = async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    // Check if the provided role is valid
    if (!["doctor", "patient", "pharmacist"].includes(role)) {
      return res.status(400).json({ error: "Invalid role provided" });
    }

    let roleData = {};
    if (role === "pharmacist") {
      const { register_no, pharmacyName, location } = req.body.roleData;

      roleData = { register_no, pharmacyName, location };
    } else if (role === "doctor") {
      const { regi_no, specific_area } = req.body.roleData;
      roleData = {
        regi_no,
        specific_area,
        emailToken: crypto.randomBytes(64).toString("hex"),
      };
    } else {
      const { register_no } = req.body.roleData;
      roleData = { register_no };
    }

    const user = await User.signup(username, email, password, role, roleData);

    if (role == "doctor") {
      sendMail(
        "Doctor Verification",
        "pharmacytracking11@gmail.com",
        user.username +
          " is trying to log into the system.Please Verify the doctor " +
          user.email
      );
    }

    // Create a token
    const token = createToken(user._id, role);

    res.status(200).json({ email, username, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.error(error);
  }
};

//get all doctors
const getDoctor = async (req, res) => {
  try {
    const doctors = await User.find({ role: "doctor" }).sort({ createdAt: -1 });

    if (doctors.length === 0) {
      return res
        .status(404)
        .json({ message: 'No doctors found with role "doctor".' });
    }

    res.status(200).json(doctors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

// const signupUser = async (req, res) => {
//   const { username, email, password } = req.body;
//   console.log("hit");
//   try {
//     const user = await User.signup(username, email, password);

//     //create token

//     const token = createToken(user._id);

//     res.status(200).json({ email, username, token });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//     console.log(error);
//   }
// };

const verifyEmail = async (req, res) => {
  try {
    const emailToken = req.body.emailToken;

    if (!emailToken) return res.status(404).json("EmailToken not found ....");

    const user = await userModel.findOne({ emailToken });

    if (user) {
      user.emailToken = null;
      user.isVerified = true;

      await user.save();

      const token = createToken(user._id);

      res.status(200).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        regi_no: user.regi_no,
        specific_area: user.specific_area,
        token,
        isVerified: user?.isVerified,
      });
    } else res.status(404).json("Email verification failed.invalid token!");
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser, verifyEmail, getDoctor };
