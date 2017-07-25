import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Loading from './Loading';
import api from '../utils/api';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function getDate(date){
	var date = new Date(date);
	return `${Month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

function PostsGrid(props){
  return(
    <ul className="popular-list">
    {
		props.posts.map(function(post, index){
			return(
				<div className="post_wrapper" key={index} id={post._id}>
					<Link to={`/posts/${post._id}`}>
						<h2 className="title">{post.name}</h2>
					</Link>
					<p className="date">{`${getDate(post.createdAt)}`}</p>
				</div>
			)
		})
    }
    </ul>
  )
}

PostsGrid.propTypes = {
  posts: PropTypes.array.isRequired,
}

class PostList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			posts:[]
		}
		this.updatePosts = this.updatePosts.bind(this);
	}
	componentDidMount(){
		//Make API call to fetch posts
		this.updatePosts();
	}
	updatePosts(){
		this.setState(function(){
			return{
				posts: []
			}
		});
		api.fetchAllPosts()
			.then(function(posts){
				this.setState(function(){
					return{
						posts: posts
					}
				})
			}.bind(this))
	}
	render(){
		return(
			<div>
				{!this.state.posts === [] ?  <Loading /> : <PostsGrid
	          		posts={this.state.posts}
	        	/>}
			</div>
		)
	}
};

module.exports = PostList;