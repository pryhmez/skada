// var router = require('express').Router();
var userRoutes = require("./userRoutes");
var schedulingRoutes = require("./schedulingRoutes")

module.exports = function (router) {
    router.use("/user", userRoutes());
    router.use("/schedule", schedulingRoutes());
    return router;
}