var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema   = new Schema({
  name: {
    type: String
  },
  body: {
    type: String
  }
});

var Post = module.exports = mongoose.model('Post', PostSchema);

module.exports.createPost = function(newPost, callback){
	newPost.save(callback);
}

module.exports.updatePost = function(newPost, callback){
  Post.findById(newPost.id, function(err, post){
    if(err){
      res.send(err);
    }
    res.json(post)
  });
}