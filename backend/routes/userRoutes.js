const router = require('express').Router();
const authController = require("../controllers/authController");
const { signUpValidation, loginValidation }  =  require("../middleWares/userValidation");

module.exports = function() {
   
    var authCtl = new authController();
    
    router.post("/signup", signUpValidation , authCtl.signUp);
    router.get('/confirmation/:token', authCtl.confirmSignUp);
    router.post('/resend', authCtl.resendConfirmToken);
    router.post("/login", loginValidation, authCtl.login);
    return router;
}