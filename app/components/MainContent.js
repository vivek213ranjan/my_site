import React from 'react';
import ReactDOM from 'react-dom';
import PostList from './PostList';

const HeaderSection = () => {
	return(
		<div id="main_content">
			<div id="header">
				<p>All Posts</p>
				<div className="buttons">
					<button className="button">
						New Post
					</button>
					<button className="button">
						Log Out
					</button>
				</div>
			</div>
			<PostList />
		</div>
	);
};

class MainContent extends React.Component {
	render(){
		return(
			<HeaderSection />
		);
	}
};

module.exports = MainContent;