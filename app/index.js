var React = require('react');
var ReactDom = require('react-dom');

require('./index.css');

class VivekBlog extends React.Component {
  render() {
    return (
      <div> Hello World! </div>
    );
  }
}

ReactDom.render(
  <VivekBlog />,
  document.getElementById('app')
);


module.exports = VivekBlog;