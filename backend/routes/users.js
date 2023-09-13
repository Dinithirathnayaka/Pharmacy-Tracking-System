const router = require("express").Router();

const {
  signupUser,
  loginUser,
  verifyEmail,
} = require("../controllers/userController");

//LOGIN route
router.post("/login", loginUser);

//SIGNUP route
router.post("/signup", signupUser);

//VERIFY email
router.post("/verify-email", verifyEmail);

module.exports = router;
