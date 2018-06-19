var express  = require('express');
var mysql = require('mysql');
const Sequelize = require('sequelize');

var app      = express(); 								// create our app w/ express
var port  	 = process.env.PORT || 8080; 
//var mongoose = require('mongoose'); 					// mongoose for mongodb				// set the port
       // load the database config
var db = require('./config/database.js');
var bodyParser = require('body-parser'); 
 
app.use(express.static(__dirname + '/app/client'));
app.__config = __dirname +"config";

require('./app/server/api.js')(app);
require('./app/server/web.js')(app);




//this is superb editot i think

app.listen(port);
console.log("App listenings on port " + port);
