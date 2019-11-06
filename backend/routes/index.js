// var router = require('express').Router();
var userRoutes = require("./userRoutes");
var schedulingRoutes = require("./schedulingRoutes");
var walletRoutes = require('./walletRoutes');

module.exports = function (router) {
    router.use("/user", userRoutes());
    router.use("/schedule", schedulingRoutes());
    router.use("/wallet", walletRoutes());
    return router;
}