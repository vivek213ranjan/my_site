import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Loading from './Loading';
import api from '../utils/api';

const getPostIdFromUrl = (props) => {
	const postId = props.match.params.postId
	return postId;
}

class PostEdit extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			title: '',
			content: '',
      id: ''
		}
		this.updatePosts = this.updatePost.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount(){
		//Make API call to fetch post
		this.updatePost();
	}
  handleChange(event, name) {
    var value = event.target.value;
    this.setState({ [name]: value });
  }
	handleSubmit(event){
	  event.preventDefault();
	  var newPost = {
    	name: this.state.title,
    	content: this.state.content
    }
    api.updateCurrentPost(this.state.id, newPost)
    	.then(function(response){
    		console.log(response.success);
    		if(response.success === true){
    			window.location.href = `${window.location.origin}/posts/${response.data.post.id}`;
    		} else {
    			var errors = response.errors;
    			for(var i=0 ;i<errors.length; i++){
    				var key = errors[i].param;
    				var value  = errors[i].msg;
    				document.getElementById(`${key}_error`).innerHTML = value;
    			}
    		}
    	});
	}
	updatePost(){
		this.setState(function(){
			return{
				title: '',
				content: '',
        id: ''
			}
		});
		var postId = getPostIdFromUrl(this.props);
		console.log(postId);
		api.fetchPostById(postId)
			.then(function(post){
				this.setState(function(){
					return{
						title: post.name,
						content: post.body,
            id: post._id
					}
				})
			}.bind(this))
	}
	render(){
		return(
			<div id="page_wrapper">
				<h1>Edit Post</h1>
				<form onSubmit={this.handleSubmit}>
					<div>
			            <label>Title</label><br />
			            <input
			              id="title"
			              type="text" 
			              placeholder="Title" 
			              name="title" 
			              value={this.state.title}
			              onChange={(e) => this.handleChange(e, "title")} 
			            /><br />
                  <p id="name_error" className="error_message"></p><br />
			          </div>
                <br />
			          <div>
			            <label>Body</label><br />
			            <textarea
			              id="body"
			              placeholder="Post Content" 
			              name="body" 
			              value={this.state.content}
			              onChange={(e) => this.handleChange(e, "content")} 
			            /><br />
                  <p id="content_error" className="error_message"></p><br />
			          </div>
					   <div>
              <br />
				      <button type="submit" className="button">Edit Post</button>
				    </div>
				</form>
			</div>
		)
	}
};

module.exports = PostEdit;