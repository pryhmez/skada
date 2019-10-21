var express = require('express');
var app = express();
var http = require('http');
// var cors = require('cors');
// var morgan = require('morgan');
var port = process.env.PORT || 8080;
var databaseconfig = require('./config/db');
var appRoutes = require("./routes")
var Router = require("express").Router();

app.use(express.json());
// app.use(cors());
app.use(express.urlencoded({extended: false}))

const server = http.createServer(app);

app.use('/api', appRoutes(Router));

app.use(logger('dev'));

server.listen(port, () => {

    console.log('listening on port', port)
})

server.on('listening', listening)

server.on('error', () => {

})

server.on('close', () => {

})

server.on('connection', () => {

})

function listening () {
    databaseconfig();
}