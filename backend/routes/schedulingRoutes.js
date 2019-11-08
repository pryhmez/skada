var router = require('express').Router();
var checkAuth = require('../middleWares/checkAuth')
var schedulingController = require("../controllers/schedulingController");
const multer = require("multer");
// const upload = multer({ dest: "uploads/" });
const upload = require("../config/multerCofig")

module.exports = function () {

    var schedulingCtl = new schedulingController();

    router.post("/create",
        checkAuth,
        upload.single("goodImg"),
        schedulingCtl.create);

    router.get("/get",
        checkAuth,
        schedulingCtl.get);

    router.post("/getall", schedulingCtl.getAll);

    router.post("/delete", schedulingCtl.delete);

    router.post("/update", schedulingCtl.update);

    return router;
}