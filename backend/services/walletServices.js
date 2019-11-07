const walletModel = require("../models/wallet")


var creditWallet = function () {

}

var debitWallet = function () {

}

var balanceOfWallet = function () {

}

var infoOfWallet = function (query) {
    return walletModel.find({userId: query.userId})
}

var updatecardOfWallet =function (details) {

    var wallet = new walletModel(
        {
            userId: details.userId,
            cardDetails: {
                cardNo: details.cardNo,
                cardName: details.cardName,
                cardCvv: details.cardCvv,
                expDate: details.expDate
            },
        }
    )

    // wallet.userId = details.userId;
    // wallet.cardDetails.cardNo = details.cardNo;
    return wallet.save();
      
}

module.exports = {
    creditWallet,
    debitWallet,
    balanceOfWallet,
    infoOfWallet,
    updatecardOfWallet
}