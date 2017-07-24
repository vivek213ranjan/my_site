var React = require('react');
var ReactDOM = require('react-dom');

class NewPost extends React.Component {
	constructor(props){
    super(props);
    this.state = {
      title: '',
      content: ''
    }
  }
  handleSubmit(event){
    event.preventDefault();
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
			              id="title"
			              type="text" 
			              placeholder="Title" 
			              name="title" 
			              value={this.state.title}
			              onChange={(e) => this.handleChange(e, "title")} 
			            /><br />
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
			          </div>
					   <div>
              <br />
				      <button type="submit">Register Yourself</button>
				    </div>
				</form>
			</div>

		);
	}
};

module.exports = NewPost;