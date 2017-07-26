import React from 'react';
import SideBar from './Sidebar';
import MainContent from './MainContent';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

class App extends React.Component {
  componentWillMount(){
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://cloud.tinymce.com/stable/tinymce.min.js";
    document.head.appendChild(s);
  }
  render() {
    return (
    	<Router>
        <div>
        <SideBar />
          <Switch>
  		        <MainContent />
          </Switch>
        </div>
		</Router>
    )
  }
}

module.exports = App;