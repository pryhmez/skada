const { balanceOfWallet, creditWallet, debitWallet, infoOfWallet, updatecardOfWallet } = require("../services/walletServices")


module.exports = function walletController() {
    this.debit = (req, res, next) => {

        debitWallet(req.body).then()
    }

    this.credit = (req, res, next) => {

    }

    this.balance = (req, res, next) => {

    }

    this.info = (req, res, next) => {
        console.log(req.query);
        infoOfWallet(req.query).then(result => {
           if(result){
            res.status(200).json({
                message: "retrival successful",
                data: result
            })
           }else{
               res.status(404).json({
                   message: "couldnt find wallet",
               })
           }
        }).catch(err => {
            res.status(400).json({
                message: err
            })
        })
    }

    this.updateCard = (req, res, next) => {
       
        updatecardOfWallet(req.body).then(result => {
            res.status(200).json({
                message: "successfully added card",
                data: result
            })
        }).catch(err => {
            res.status(400).json({
                message: err
            })
        }
        )
    }
}