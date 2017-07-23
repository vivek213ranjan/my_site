var React = require('react');
var ReactDOM = require('react-dom');
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import About from './About';
import PostList from './PostList';
import UserRegister from './UserRegister';

class CenterSection extends React.Component {
	render(){
		return(
	      	<Router>
	      		<div className='container'>
	      			<Route exact path='/' component={PostList} />
			        <Route path='/about' component={About} />
		        </div>
		    </Router>
		   
		)
	}
};

module.exports = CenterSection;