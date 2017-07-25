var React = require('react');
var ReactDOM = require('react-dom');
import api from '../utils/api';

class NewPost extends React.Component {
	constructor(props){
    super(props);
    this.state = {
      title: '',
      content: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    var newPost = {
    	name: this.state.title,
    	content: this.state.content
    }
    document.getElementById('name_error').innerHTML = '';
    document.getElementById('content_error').innerHTML = '';
    api.createNewPost(newPost)
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
  handleChange(event, name) {
    var value = event.target.value;
    this.setState({ [name]: value });
  }
	render(){
		return(
			<div id="page_wrapper">
				<h1>New Post</h1>
				<form onSubmit={this.handleSubmit}>
					<div>
			            <label>Title</label><br />
			            <input
			              id="name"
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
			              id="content"
			              placeholder="Post Content" 
			              name="body" 
			              value={this.state.content}
			              onChange={(e) => this.handleChange(e, "content")} 
			            /><br />
			            <p id="content_error" className="error_message"></p><br />
			          </div>
					   <div>
              <br />
				      <button type="submit" className="button">Create Post</button>
				    </div>
				</form>
			</div>

		);
	}
};

module.exports = NewPost;