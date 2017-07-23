var express = require('express');
var router = express.Router();
var Post = require('../app/models/post');

router.get('/', function(req, res){
  Post.find(function(err, posts){
    if(err){
      res.send(err)
    }
    res.json(posts);
  });
});

router.post('/', function(req, res){
  var post = new Post();
  post.name = req.body.name;
  post.body = req.body.content;
  post.save(function(err){
    if(err){
      res.send(err);
    }
    res.json({message: 'Post Created'});
  });
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
  Post.findById(req.params.post_id, function(err, post){
    if(err){
      res.send(err);
    }
    post.name = (req.body && req.body.name) || post.name;
    post.body = (req.body && req.body.content) || post.body;
    post.save(function(err){
      if(err){
        res.send(err);
      }
      res.json({ message: 'Post Updated' });
    })
  });
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