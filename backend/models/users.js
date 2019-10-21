var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    firstName : {type : String, require : true},
    lastName : { type : String, required : true}, 
    email: { type : String, required : true},
    phone : { type : String, required : true},
    createdDate : { type : Date, default: new Date()},
})

module.exports = mongoose.model('Users', UserSchema)