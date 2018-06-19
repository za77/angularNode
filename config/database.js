var mysql = require('mysql');
const Sequelize = require('sequelize');
	
var mongourl = process.env.MONGO_URI? process.env.MONGO_URI : 'mongodb://root:Zse45rdX@localhost:27017/mean';
const sequelize = new Sequelize('mysql://root:Zse43wA@localhost:3306/angularNode');

module.exports = {
	
	url : mongourl,
	db:sequelize
};


// var con = mysql.createConnection({
// 	host: "localhost",
// 	user: "root",
// 	password: "Zse43wA",
// 	database: "angularNode"
//   });
  
  
//   con.connect(function(err) 
//   {
// 	if (err) throw err;
// 	con.query("SELECT * FROM users", function (err, result, fields) {
// 	  if (err) throw err;
// 	  console.log(result);
// 	});
//   });

// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('angularNode', 'root', 'Zse43wA', {
//   host: 'localhost',
//   dialect: 'mysql'|'sqlite'|'postgres'|'mssql',
//   operatorsAliases: false,

//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   },

 
//   storage: 'path/to/database.sqlite'
// });

// Or you can simply use a connection uri


// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });


