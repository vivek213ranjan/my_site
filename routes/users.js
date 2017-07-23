var express = require('express');
var router = express.Router();
var app = express();
var User = require('../app/models/user');
//Register
router.get('/register', function(req, res){
	res.render('register');
});

//Login
router.get('/login', function(req, res){
	res.render('login');
});

//Register user
router.post('/register', function(req, res){
  var name = req.body.name;
  var email = req.body.email;
  var username = req.body.username;
  var password = req.body.password;
  var password2 = req.body.password2;
  console.log(name);

  //Validation  
  req.checkBody('name', 'Name is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('username', 'Username is required').notEmpty();
  req.checkBody('password', 'Password is required').notEmpty();
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
  var errors = req.validationErrors();
  if(errors){
    res.send({
      success: false,
      data: {},
      errors: errors
    });
  } else {
    var newUser = new User({
      name: name,
      email: email,
      username: username,
      password: password
    });
    User.createUser(newUser, function(err, user){
      if(err){
        res.send({
          success: false,
          data: {},
          errors: err
        }); 
      }
      res.send({
        success: true,
        data: {
          user: {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        },
        errors: errors
      });
    });
  }
});

module.exports = router;