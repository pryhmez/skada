const mongoose = require('mongoose');

function initDb() {
	mongoose.connect(
		'mongodb+srv://Isaac:isaac123@skada-cslhn.mongodb.net/test?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
			useCreateIndex: true
		},
		(error) => {
			error ? console.log(`not connected to Databse`, error) : console.log(`connected to Databse`);
		}
	);
}

module.exports = initDb;
