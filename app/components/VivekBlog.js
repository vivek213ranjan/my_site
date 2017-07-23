import React from 'react';
import SideBar from './Sidebar';
import MainContent from './MainContent';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;

class App extends React.Component {
  render() {
    return (
      	<div>
	        <SideBar />
	        <MainContent />
	    </div>
    )
  }
}

module.exports = App;