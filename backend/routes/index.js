var router = require('express').Router();
var userRoutes = require("./userRoutes");

module.exports = function () {
    router.use("/user", userRoutes)
}