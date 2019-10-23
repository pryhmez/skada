var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    firstName : {type : String, require : true},
    lastName : { type : String, required : true}, 
    phone : { type : String, required : true},
    email: { type : String, required : true},
    password: { type : String, required : true},
    businessName: {type : String, required : true},
    businessPhone: { type : String, required : true},
    businessType: { type : String, required : true},
    businessCategory: { type : Array, required : true},
    createdDate : { type : Date, default: new Date()},
})

module.exports = mongoose.model('Users', UserSchema)