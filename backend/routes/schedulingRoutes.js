var router = require('express').Router();
var checkAuth = require('../middleWares/checkAuth')
var schedulingController = require("../controllers/schedulingController");

module.exports = function() {
   
    var schedulingCtl = new schedulingController();
    
    router.post("/create", schedulingCtl.create);
    // router.post("/login", schedulingCtl.getSchedules);
    
    return router;
}