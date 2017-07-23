
var express = require('express');
let mongoUtil  = require('../utils/mongoUtil');
var router = express.Router();

//now we can set the route path  & initialize the API

router.get('/api/posts', function(req, res){
  Post.find(function(err, posts){
    if(err){
      res.send(err)
    }
    res.json(posts);
  });
});

  var name = req.body.name;
  router.route('/api/posts')
  .post(function(req, res) {
    
  })
  .get(function(req, res){
    
  })


  router.route('/api/posts/:post_id')
    .get(function(req, res){
      
    })
    .put(function(req, res){
      
    })
    .delete(function(req, res){
      
    })
module.exports = router;