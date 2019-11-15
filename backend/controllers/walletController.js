const { balanceOfWallet, creditWallet, debitWallet, infoOfWallet, updatecardOfWallet } = require("../services/walletServices");
const {keySecret, keyPublishable} = require("../config/stripeConfig");
const stripe = require("stripe")(keySecret);

module.exports = function walletController() {
    this.debit = async (req, res, next) => {
        await debitWallet(req.body).then()
    }
    
    this.credit =async (req, res, next) => {
        console.log(req.query)
        console.log("jdnbvelvbkbevlbvhkibvkibvlrekvrblbvekrgvklrb");
        
       let amount = parseFloat(req.query.amount);
    
        // create a customer
       await stripe.customers.create({
            email: req.body.stripeEmail, // customer email
            source: req.body.stripeToken // token for the card
        }).then(customer =>
                stripe.charges.create({ // charge the customer
                    amount,
                    description: "Sample Charge",
                    currency: "usd",
                    customer: customer.id
                })).then ( charge => {
                // console.log(charge);
                console.log("this is charge")
            res.render("charge", {amount: amount})
        } )// render the payment successful alter page after payment

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