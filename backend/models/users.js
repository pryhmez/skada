var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	phone: { type: String, required: true },
	email: {
		type: String,
		required: true,
		lowercase: true,
		// index: {unique: true, dropDups: true},
		unique: true
	},
	password: { type: String, required: true },
	businessName: { type: String, required: true },
	businessPhone: {
		type: String,
		required: true
	},
	businessType: { type: String, required: true },
	businessCategory: { type: Array, required: true },
	createdDate: { type: Date, default: new Date() },
	isVerified: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', UserSchema);
