"use strict";

let express = require('express');
let app = express();



var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var router = express.Router();

var port = process.env.API_PORT || 3038;

//configure the API to use bodyParser and look for JSON Data in request body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//set our header to allow CORS(Cross origin resource sharing) with middleware 
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, PUT, POST, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.get('/sports', (request, response) => {
	response.json([
		{
			"name": "First Post",
			"content": "Content of the first post"
		},
		{
			"name": "Second Post",
			"content": "Content of the second post"
		}
	])
});

//starts the server and listens for requests
app.listen(port, () => {
  console.log(`api running on port ${port}`);
});

mongoose.connect('mongodb://localhost/vivek_blog',{ useMongoClient: true });

require('./app/controllers/posts')(router);
//Use router configuration when we call /api
app.use('/api', router);