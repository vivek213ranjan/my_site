import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Loading from './Loading';
import api from '../utils/api';
import {
	Link
} from 'react-router-dom';
import prettyDate from '../helpers/extra_helpers';

const getPostIdFromUrl = (props) => {
	const postId = props.match.params.postId
	return postId;
}

class PostShow extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			title: '',
			content: '',
			id: '',
			createdAt: ''
		}
		this.updatePosts = this.updatePost.bind(this);
	}
	componentDidMount(){
		//Make API call to fetch post
		this.updatePost();
	}
	updatePost(){
		this.setState(function(){
			return{
				title: '',
				content: '',
				id: '',
				createdAt: ''
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
						id: post._id,
						createdAt: post.createdAt
					}
				})
			}.bind(this))
	}
	render(){
		return(
			<div id="post_content">
				<h1 className="title">{this.state.title}</h1>
				<p className="date">
					Submitted {prettyDate(this.state.createdAt)}   |     <Link to={`/posts/${this.state.id}/edit`}>
						Edit 
					</Link>    
				</p>
				<br /><br />
				<p className="body post-content-body">{this.state.content}</p>

	
			</div>
		)
	}
};

module.exports = PostShow;