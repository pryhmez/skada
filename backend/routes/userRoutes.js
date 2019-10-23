var router = require('express').Router();
var userController = require("../controllers/userController");

module.exports = function() {
   
    var userCtl = new userController();
    
    router.post("/signUp", userCtl.addUser);
    router.post("/login", userCtl.login);
    
    return router;
}