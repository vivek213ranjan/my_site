"use strict";

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/vivek_blog',{ useMongoClient: true });
var db = mongoose.connection;


var routes = require('./routes/index');
var users = require('./routes/users');
var posts = require('./routes/posts');

//init app
var app = express();

//Bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

//Express session
app.use(session({
	secret: 'secret',
	saveUninitialized: true,
	resave: true
}));

//Passport init
app.use(passport.initialize());
app.use(passport.session());

//set our header to allow CORS(Cross origin resource sharing) with middleware 
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, PUT, POST, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

//Express Validator
app.use(expressValidator({
	errorFormatter: function(param, msg, value) {
		var namespace = param.split('.')
		, root = namespace.shift()
		, formParam = root;

		while(namespace.length){
			formParam += '[' + namespace.shift() + ']';
		}
		return {
			param: formParam,
			msg: msg,
			value: value
		};
	},
	customValidators: {
		minLength: function(strings, threshold) {
			console.log(strings);
			console.log(threshold);
			return strings.length < threshold;
		},
		maxLength: function(strings, threshold) {
			return strings.length > threshold;
		}
	}
}));


//Connect flash middleware
app.use(flash());

//Global variables
app.use(function(req, res, next){
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	res.locals.error = req.flash('error');
	next();
});


app.use('/', routes);
app.use('/api/users', users);
app.use('/api/posts', posts);

//Set Port
app.set('port', (process.env.PORT || 3038));

app.listen(app.get('port'), function(){
	console.log('Server started on port ' + app.get('port'));
});

