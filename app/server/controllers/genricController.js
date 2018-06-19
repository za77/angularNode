'use strict';

/**
 * Module dependencies.
 */

//const mongoose = require('mongoose');
var Sequelize = require('sequelize');
//const user  = require('../models/users');
//const copy_users = require('../models/copy_users');
//const _DB  = require('../models/user');


/**
 * Load
 */

var _DB = function(req)
{
    var tbl = require('../models/'+req.params.table);
    return tbl;
}

exports.get= function(req,res)
{
    var table = _DB(req);
    table.findAll()
    .then(function(user) { 
        var data  = {"data":user};
        res.status(200).json(data);  
     },function(error) {  
       res.status(400).send('welcome' );  
    });  

}
exports.getById = function(req,res)
{
    var table = _DB(req);
    table.findOne({where: {id:req.params.id}})
    .then(function(user) { 
        var data  = {"data":user};
        res.status(200).json(data);  
     },function(error) {  
       res.status(400).send('welcome' );  
    });  

}

exports.save = function(req,res)
{  
    
    var table = _DB(req);   
    table.findAll().then(function(user) { 
        var data  = {"data":user};
        res.status(200).json(data);  
     },function(error) {  
       res.status(500).send('welcome' );  
    });  

	

}
exports.remove = function(req,res)
{
    var table = _DB(req);
    user.destroy({where: {id: req.params.id}}).then(function(user) { 
        var data  = {"data":user};
        res.status(200).json(data);  
     },function(error) {  
       res.status(500).send('welcome' );  
    });  

	

}
exports.softRemove = function(req,res)
{
   
    var table = _DB(req);
    table.findAll().then(function(user) { 
        var data  = {"data":user};
        res.status(200).json(data);  
     },function(error) {  
       res.status(500).send('welcome' );  
    });  

	

}