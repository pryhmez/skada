var express = require('express');
var { keySecret, keyPublishable } = require("./config/stripeConfig");
var app = express();
var http = require('http');
var cors = require('cors');
var morgan = require('morgan');
const dotenv = require('dotenv');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
var port = process.env.PORT || 8080;
var databaseconfig = require('./config/db');
var appRoutes = require('./routes');
var Router = require('express').Router();
const stripe = require("stripe")(keySecret);
const pug = require('pug');
const path = require('path');

var corsOptions = {
	origin: ['http://localhost:3000', 'https://skada.netlify.com/'],
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
dotenv.config({ path: './config/config.env' });

app.use(morgan('dev'));
app.use(express.json());
app.use(cors(corsOptions));
app.use('/uploads', express.static('uploads'));
app.use( '/routes',express.static('routes'));
app.use( '/views',express.static('views'));

app.use(express.urlencoded({ extended: false }))

const server = http.createServer(app);
app.set('views', path.join(__dirname, 'views'));
// set view engine as pug
//ff
app.set('view engine', 'pug');

// app.post("/charge", function (req, res) {

// 	let amount = 10 * 100;

// 	// create a customer
// 	stripe.customers.create({
// 		email: req.body.stripeEmail, // customer email
// 		source: req.body.stripeToken // token for the card
// 	})
// 		.then(customer =>
// 			stripe.charges.create({ // charge the customer
// 				amount,
// 				description: "Sample Charge",
// 				currency: "usd",
// 				customer: customer.id
// 			}))
// 		.then(charge => res.render("charge")); // render the payment successful alter page after payment

// });

app.use('/api', appRoutes(Router, app));
app.all('*', (req, res, next) => {
	next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);
server.listen(port, () => {
	console.log('listening on port', port);
});

server.on('listening', listening);

// server.on('error', () => {

// })

// server.on('close', () => {

// })

function listening() {
	databaseconfig();
}
