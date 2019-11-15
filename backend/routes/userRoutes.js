const router = require("express").Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const auth = require("../middleWares/checkAuth");
const {
  signUpValidation,
  loginValidation
} = require("../middleWares/userValidation");

module.exports = function() {
  var userCtl = new userController();
  var authCtl = new authController();

  router.post("/signup", signUpValidation, authCtl.signUp);
  router.get("/confirmation/:token", authCtl.confirmSignUp);
  router.post("/resend", authCtl.resendConfirmToken);
  router.post("/login", loginValidation, authCtl.login);
  router.post("/edit", loginValidation, userCtl.editUserProfile);

  router.get("/login", auth, authCtl.getLoggedInUser);
  router.get("/dashboard", userCtl.getDashboard);
  return router;
};
