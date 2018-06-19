
var Sequelize = require('sequelize');
const db = require('../../../config/database');
const sequelize = db.db;
const role = sequelize.define('role', {
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    }
  });

   //force: true will drop the table if it already exists
   //role.sync({force: true}).then(() => {
    // Table created
    // return users.create({
    //   firstName: 'John',
    //   lastName: 'Hancock',
    //   name:"sample"
    // });
  //});

module.exports = role;
