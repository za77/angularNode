var genricController = require('./controllers/genricController');
var path = require("path");

module.exports = function(app){
    // API Routes
    
    app.get('/api/:table/list', genricController.get);    
    app.get('/api/:table/:id', genricController.getById); 
    app.post('/api/:table/save', genricController.save);    
    app.get('/api/:table/softRemove/:id', genricController.softRemove);    
    app.get('/api/:table/remove/:id', genricController.remove);    


};
