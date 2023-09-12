const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

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
  const { username, email, password, role } = req.body; // Include the 'role' field in the request body

  try {
    // Check if the provided role is valid
    if (!["doctor", "patient", "pharmacist"].includes(role)) {
      return res.status(400).json({ error: "Invalid role provided" });
    }

    // Check if the provided role-specific data is valid
    let roleData = {};
    if (role === "doctor") {
      const { regi_no, specific_area } = req.body.roleData;
      roleData = { regi_no, specific_area };
    } else if (role === "pharmacist") {
      const { register_no } = req.body.roleData;
      roleData = { register_no };
    }

    const user = await User.signup(username, email, password, role, roleData);

    // Create a token
    const token = createToken(user._id, role);

    res.status(200).json({ email, username, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.error(error);
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

module.exports = { signupUser, loginUser };
