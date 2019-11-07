const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var WalletSchema = new Schema({
    walletId: {type: mongoose.Schema.Types.ObjectId, default: new mongoose.Types.ObjectId},
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true,
        index: { unique: true, dropDups: true}
     },

    balance: { type: Number, default: 1000},

    transactionHistory: { type: Array, default: {date: new Date(), event: "added card"}},

    cardDetails: {

        cardNo: { type: String, trim: true },
        cardName: { type: String },
        cardCvv: { type: String},
        expDate: { type: String}
    }

})

module.exports = mongoose.model('Wallet', WalletSchema)