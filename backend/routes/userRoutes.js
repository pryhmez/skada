const router = require('express').Router();
const authController = require("../controllers/authController");
const { signUpValidation, loginValidation }  =  require("../middleWares/userValidation");

module.exports = function() {
   
    var authCtl = new authController();
    
    router.post("/signUp", signUpValidation , authCtl.signUp);
    router.post("/login", loginValidation, authCtl.login);
    
    return router;
}