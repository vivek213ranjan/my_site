import React from 'react';
import ReactRouter from 'react-router-dom';
import SideBar from './Sidebar';
import MainContent from './MainContent';

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