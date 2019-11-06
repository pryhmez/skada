var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const validator = require('validator');

var UserSchema = new Schema({
	firstName: { type: String, required: true , trim: true},
	lastName: { type: String, required: true, trim: true },
	phone: { type: String, required: true, trim: true },
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true, trim: true
	},
	password: { type: String, required: true, trim: true },
	businessName: { type: String, required: true, trim: true },
	businessPhone: {
		type: String,
		required: true
	},
	businessType: { type: String, required: true },
	businessCategory: { type: Array, required: true },
	createdDate: { type: Date, default: new Date() }
});

module.exports = mongoose.model('Users', UserSchema);
