import React from 'react';
import SideBar from './Sidebar';
import MainContent from './MainContent';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
    	<Router>
	      	<div>
		        <SideBar />
		        <MainContent />
		    </div>
		</Router>
    )
  }
}

module.exports = App;