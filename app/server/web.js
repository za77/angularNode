var genricController = require('./controllers/genricController');
var path = require("path");

module.exports = function(app){
     
    // Main Routes
    // app.get('/get', userController.get); 
    // app.post('/upload', userController.upload); 

	app.get('/', function(req, res) {
		var hostname = req.headers.host;
        console.log(path.join(__dirname, '../client/views/', 'index.html'));
        res.sendFile(path.join(__dirname, '../client/views/firebase-js/', 'index.html')); // load our public/index.html file
    });
  
    
 
};
