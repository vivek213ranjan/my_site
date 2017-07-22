import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Loading from './Loading';
import api from '../utils/api';

function PostsGrid(props){
  return(
    <ul className="popular-list">
    {
		props.posts.map(function(post, index){
			return(
				<div className="post_wrapper" key={index}>
					<h2 className="title">{post.name}</h2>
					<p className="date">{post.content}</p>
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