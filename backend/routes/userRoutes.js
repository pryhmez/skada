const router = require('express').Router();
const userController = require("../controllers/userController");
const userValidation   =  require("../middleWares/userValidation")

module.exports = function() {
   
    var userCtl = new userController();
    
    router.post("/signUp",  userValidation("create user"), userCtl.signUp);
    router.post("/login", userCtl.login);
    
    return router;
}