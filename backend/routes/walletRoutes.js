const router = require("express").Router();
const walletController = require("../controllers/walletController");
var { keySecret, keyPublishable } = require("../config/stripeConfig")
const stripe = require("stripe")(process.env.keySecret);


module.exports = function () {

    var walletCtl = new walletController();

    router.post(
        "/credit",
        walletCtl.credit);

    router.post(
        "/debit",
        walletCtl.debit);

    router.get(
        "/info",
        walletCtl.info);

    router.get(
        "/balance",
        walletCtl.balance);

    router.post(
        "/updatecard",
        walletCtl.updateCard);

    // to open the payment page on base url
    router.get("/pay", ((req, res) => {
        res.render("index", { keyPublishable: process.env.keyPublishable});
    }));

    return router;

}