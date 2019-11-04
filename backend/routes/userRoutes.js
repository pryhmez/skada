const router = require('express').Router();
const userController = require("../controllers/userController");
const {  userSignUpValidation, userLoginValidation }  =  require("../middleWares/userValidation");

module.exports = function() {
   
    var userCtl = new userController();
    
    router.post("/signUp", userSignUpValidation , userCtl.signUp);
    router.post("/login", userLoginValidation, userCtl.login);
    
    return router;
}