const router = require("express").Router();
const walletController = require("../controllers/walletController");
// var { keySecret, keyPublishable } = require("../config/stripeConfig")
// var keyPublishable = process.env.keyPublishable;
const stripe = require("stripe")(process.env.keySecret);


module.exports = function walletRoutes() {
    let amount = 0;

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
        console.log(req.query.amount);
        amount=req.query.amount;
        const keyPublishable = process.env.keyPublishable;
        console.log(keyPublishable);
        res.render("index", { 
            keyPublishable: keyPublishable, 
            amount: amount, 
            creditLink: "./credit?amount=" + amount, 
            dispAmount: amount*100
         });
    }));

    return router;

}