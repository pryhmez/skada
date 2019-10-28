const router = require('express').Router();
const userController = require("../controllers/userController");
const {  userSignUpValidation }  =  require("../middleWares/userValidation");

module.exports = function() {
   
    var userCtl = new userController();
    
    router.post("/signUp", userSignUpValidation , userCtl.signUp);
    router.post("/login", userCtl.login);
    
    return router;
}