const router = require("express").Router();

const {
  signupUser,
  loginUser,
  verifyEmail,
  getDoctor,
  forgotPassword,
  resetPassword,
  getUser,
  deleteUser,
  getUnapprovedDoctors
} = require("../controllers/userController");

//LOGIN route
router.post("/login", loginUser);

//SIGNUP route
router.post("/signup", signupUser);

//VERIFY email
router.post("/verify-email", verifyEmail);

//GET all doctors
router.get("/doctors", getDoctor);

//Get unapproved doctors
router.get("/non-approved-doctors", getUnapprovedDoctors);

// FORGOT PASSWORD
router.post("/forgot-password", forgotPassword);

// RESET PASSWORD
router.post("/reset-password", resetPassword);

// GET USER
router.get("/getuser/:id", getUser);

// Delete user route
router.delete("/:id", deleteUser);



module.exports = router;
