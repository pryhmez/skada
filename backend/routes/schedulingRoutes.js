var router = require('express').Router();
var checkAuth = require('../middleWares/checkAuth')
var schedulingController = require("../controllers/schedulingController");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

module.exports = function () {

    var schedulingCtl = new schedulingController();

    router.post("/create",
        checkAuth,
        upload.single("goodImg"),
        schedulingCtl.create);
    // router.post("/login", schedulingCtl.getSchedules);

    return router;
}