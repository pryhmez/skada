const router = require("express").Router();
const walletController = require("../controllers/walletController");


module.exports = function() {

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
        walletCtl.updateCard)

        return router;

}