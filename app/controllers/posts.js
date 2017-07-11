var Post = require('../models/post');
module.exports = function(router){

//now we can set the route path  & initialize the API
  router.get('/', function(req, res){
    res.json({ message: 'API initialized!!'});
  });
  router.route('/posts')
  .post(function(req, res) {
    var post = new Post();
    post.name = req.body.name;
    post.body = req.body.content;
    post.save(function(err){
      if(err){
        res.send(err);
      }
      res.json({message: 'Post Created'});
    });
  })
  .get(function(req, res){
    Post.find(function(err, posts){
      if(err){
        res.send(err)
      }
      res.json(posts);
    });
  })


  router.route('/posts/:post_id')
    .get(function(req, res){
      Post.findById(req.params.post_id, function(err, post){
        if(err){
          res.send(err);
        }
        res.json(post)
      });
    })
    .put(function(req, res){
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
      })
    })
    .delete(function(req, res){
      Post.remove({
        _id: req.params.bear_id
      }, function(err, post){
        if(err){
          res.send(err);
        }
        res.json({ message: 'Successfully Deleted' });
      })
    })
}