const router = require("express").Router();

const { signupUser, loginUser } = require("../controllers/userController");

//LOGIN route
router.post("/login", loginUser);

//SIGNUP route
router.post("/signup", signupUser);

module.exports = router;
