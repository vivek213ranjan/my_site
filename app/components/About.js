var React = require('react');
var ReactDOM = require('react-dom');

class About extends React.Component {
	render(){
		return(
			<div id="page_wrapper">
				<div id="profile_image">
					<img src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-1/p160x160/11403325_977404785645084_7175062138900633829_n.jpg?oh=97901bbea7b2ad97026170ee7879f06d&oe=59F57C4D" />
				</div>

				<div id="content">
					<h1>Hey, I'm Vivek Ranjan</h1>
					<p>Welcome to my Mean Stack Blog.</p>
					<p>This week I built a blog in React. You're actually on the demo application right now. Cool stuff, right!.</p>
					<p>If you'd like to follow along as I learn more React, find me on Twitter <a href="https://twitter.com/vivekranjan123">@vivekranjan123</a></p>
				</div>
			</div>
		);
	}
};

module.exports = About;