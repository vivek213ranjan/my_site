import React from 'react';
import ReactDOM from 'react-dom';
import PostList from './PostList';
import CenterSection from './CenterSection';

const HeaderSection = (props) => {
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