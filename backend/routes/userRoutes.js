var router = require('express').Router();
var userController = require("../controllers/userController");

module.exports = function() {
    console.log('hi')
    var userCtl = new userController();
    console.log(userCtl.addUser)
    router.post("/signUp", userCtl.addUser);
    console.log('gee')
    return router;
}