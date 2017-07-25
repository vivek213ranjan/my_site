var express = require('express');
var router = express.Router();
var Post = require('../app/models/post');

router.get('/', function(req, res){
  Post.find({}).sort({name: 1}).exec(function(err, posts){
    if(err){
      res.send(err)
    }
    res.json(posts.sort({updatedAt: 1}));
  });
});

router.post('/', function(req, res){
  var name = req.body.name;
  var body = req.body.content;

  //Validations
  req.checkBody('name', 'Post Title is required').notEmpty();
  req.checkBody('content', 'Post Body is required').notEmpty();
  req.checkBody('name', 'Post title length should lie between 10  - 50').isLength({min: 10});
  req.checkBody('content', 'Post content length should lie between 150  - 500').isLength({min: 150});

  var errors = req.validationErrors();
  if(errors){
    res.send({
      success: false,
      data: {},
      errors: errors
    });
  } else {
    var newPost = new Post({
      name: name,
      body: body
    });
    Post.createPost(newPost, function(err, post){
      if(err){
        res.send({
          success: false,
          data: {}
        }); 
      } else {
        res.send({
          success: true,
          data: {
            post: {
              id: post._id
            }
          },
          errors: errors
        });
      }
    });
  }
});

router.get('/:post_id', function(req, res){
  Post.findById(req.params.post_id, function(err, post){
    if(err){
      res.send(err);
    }
    res.json(post)
  });
});

router.put('/:post_id', function(req, res){
  var name = req.body.name;
  var body = req.body.content;

  //Validations
  req.checkBody('name', 'Post Title is required').notEmpty();
  req.checkBody('content', 'Post Body is required').notEmpty();
  req.checkBody('name', 'Post title length should lie between 10  - 50').isLength({min: 10});
  req.checkBody('content', 'Post content length should lie between 150  - 500').isLength({min: 150});

  var errors = req.validationErrors();
  
  if(errors){
    res.send({
      success: false,
      data: {},
      errors: errors
    });
  } else {
    var newPost = new Post({
      name: name,
      body: body
    });

    Post.findById(req.params.post_id, function(err, post){
      if(err){
        res.send({
          success: false,
          data: {}
        }); 
      } else {
        post.name = (req.body && req.body.name) || post.name;
        post.body = (req.body && req.body.content) || post.body;  
        post.updatedAt = new Date();
        post.save(function(err){
          if(err){
            res.send({
              success: false,
              data: {}
            }); 
          } else {
            res.send({
              success: true,
              data: {
                post: {
                  id: post._id
                }
              },
              errors: errors
            });  
          }
        })
      }
    });
  }
});

router.delete('/:post_id', function(req, res){
  Post.remove({
    _id: req.params.bear_id
  }, function(err, post){
    if(err){
      res.send(err);
    }
    res.json({ message: 'Successfully Deleted' });
  });
});



module.exports = router;