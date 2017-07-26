var React = require('react');
var ReactDOM = require('react-dom');
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Logo() {
	return(
		<div id="logo">
			<img src="https://pbs.twimg.com/profile_images/726598367422365697/QK-e3Oc__bigger.jpg" alt="vivek_ranjan" />
		</div>
	);
}

function WebsiteSection() {
	return(
			<ul className="sidebar-ul">
				<li className="cateogry">
						Website
				</li>
				<li>
					<Link to="/">
						Blog
					</Link>
				</li>
				<li>
					<Link to="/about">
						About
					</Link>
				</li>
			</ul>
	);
}

function SocialSection() {
	return(
		<ul className="sidebar-ul">
			<li className="cateogry">Social</li>
			<li><a href="https://twitter.com/vivekranjan123">Twitter</a></li>
			<li><a href="https://www.facebook.com/vivek.ranjan.23">Facebook</a></li>
			<li><a href="https://github.com/vivek213ranjan">Github</a></li>
			<li><a href="https://plus.google.com/u/1/112448668687415626363">Google Plus</a></li>
		</ul>
	);
}

class SideBar extends React.Component {
	render(){
		return(
			<div id="sidebar">
				<Logo />
				<WebsiteSection />
				<SocialSection />
			</div>
		);
	}
};

module.exports = SideBar;