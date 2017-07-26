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
import PostShow from './PostShow';
import PostEdit from './PostEdit';

class CenterSection extends React.Component {
	render(){
		return(
			<div className="container">
	      			<Route exact path='/' component={PostList} />
			        <Route path="/about" component={About} />
			        <Route exact path="/posts_new" component={NewPost} />
			        <Route exact path="/posts/:postId" component={PostShow} />
			        <Route exact path="/posts/:postId/edit" component={PostEdit} />
			       
			</div>
		)
	}
};

module.exports = CenterSection;