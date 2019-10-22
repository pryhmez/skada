// var router = require('express').Router();
var userRoutes = require("./userRoutes");

module.exports = function (router) {
    router.use("/user", userRoutes());
    return router;
}