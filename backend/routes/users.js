const router = require("express").Router();

const {
  signupUser,
  loginUser,
  verifyEmail,
  getDoctor,
} = require("../controllers/userController");

//LOGIN route
router.post("/login", loginUser);

//SIGNUP route
router.post("/signup", signupUser);

//VERIFY email
router.post("/verify-email", verifyEmail);

//GET all doctors
router.get("/doctors", getDoctor);

module.exports = router;
