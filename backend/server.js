var express = require('express');
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

var corsOptions = {
	origin: ['http://localhost:3000','https://skada.netlify.com/'],
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

dotenv.config({ path: './config/config.env' });
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use( '/uploads', express.static('uploads'));

app.use(express.urlencoded({extended: false}))

const server = http.createServer(app);

// app.all("*", (request, response) => {response.send("k,rhherth")})

app.use('/api', appRoutes(Router));
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
