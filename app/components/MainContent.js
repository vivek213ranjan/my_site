import React from 'react';
import ReactDOM from 'react-dom';
import PostList from './PostList';
import CenterSection from './CenterSection';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const HeaderSection = (props) => {
	return(
		<div id="main_content">
			<div id="header">
				<Link to="/">
					<p>All Posts</p>
				</Link>
				<div className="buttons">
					<Link to="posts/new">
						<button className="button">
							New Post
						</button>
					</Link>
				</div>
			</div>
			<CenterSection />
		</div>
	);
};

class MainContent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isLogin: false
		}
	}
	render(){
		return(
			<HeaderSection isLogin={this.state.isLogin}/>
		);
	}
};

module.exports = MainContent;