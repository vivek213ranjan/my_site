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
		<Router>
			<ul className="sidebar-ul">
				<li className="cateogry">
						Website
				</li>
				<li>
					<Link to='/'>
						Blog
					</Link>
				</li>
				<li>
					<NavLink to='/about'>
						About
					</NavLink>
				</li>
			</ul>
		</Router>
	);
}

function SocialSection() {
	return(
		<ul className="sidebar-ul">
			<li className="cateogry">Social</li>
			<li><a href="">Twitter</a></li>
			<li><a href="">Instagram</a></li>
			<li><a href="">Github</a></li>
			<li><a href="">Email</a></li>
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