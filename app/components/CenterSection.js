var React = require('react');
var ReactDOM = require('react-dom');
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import About from './About';
import PostList from './PostList';
import UserRegister from './UserRegister';
import NewPost from './NewPost';

class CenterSection extends React.Component {
	render(){
		return(
			<div className="container">
	      			<Route exact path='/' component={PostList} />
			        <Route path="/about" component={About} />
			        <Route path="/posts/new" component={NewPost} />
			</div>
		)
	}
};

module.exports = CenterSection;