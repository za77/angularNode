
var Sequelize = require('sequelize');
const db = require('../../../config/database');
const sequelize = new Sequelize('mysql://root:Zse43wA@localhost:3306/angularNode');
const users = sequelize.define('users', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
      }
  });
  
  // force: true will drop the table if it already exists
  // users.sync({force: true}).then(() => {
  //   // Table created
  //   // return users.create({
  //   //   firstName: 'John',
  //   //   lastName: 'Hancock',
  //   //   name:"sample"
  //   // });
  // });

  module.exports = users;
