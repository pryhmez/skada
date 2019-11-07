const router = require('express').Router();
const authController = require("../controllers/authController");
const userCtl  = require('../controllers/userController')
const { signUpValidation, loginValidation }  =  require("../middleWares/userValidation");

module.exports = function() {
   
    var authCtl = new authController();
    
    router.post("/signUp", signUpValidation , authCtl.signUp);
    router.get('/confirmation/:token', authCtl.confirmSignUp);
    router.post('/resend', authCtl.resendConfirmToken);
    router.post("/login", loginValidation, authCtl.login);
    router.post("/edit", loginValidation, userCtl.editUser);
    
    return router;
}