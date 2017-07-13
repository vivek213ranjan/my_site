var React = require('react');
var ReactRouter = require('react-router-dom');
var SideBar = require('./Sidebar');


class App extends React.Component {
  render() {
    return (
      <SideBar />
    )
  }
}

module.exports = App;