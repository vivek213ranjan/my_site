var React = require('react');
var ReactDOM = require('react-dom');

class UserRegister extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      username: '',
      email: '',
      password: '',
      password2: ''
    }
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(this.props.id, )
  }
  handleChange(event, name) {
    var value = event.target.value;
    this.setState({ [name]: value });
  }
	render(){
		return(
      <div id="page_wrapper">
			  <h2>Sign up</h2>
        <form onSubmit={this.handleSubmit}>

          <div>
            <label>Name</label>
            <input
              id="name"
              type="text" 
              placeholder="Name" 
              name="name" 
              value={this.state.name}
              onChange={(e) => this.handleChange(e, "name")} 
            />
          </div>

          <div>
            <label>Email</label>
            <input 
              type="email" 
              id="email"
              placeholder="Email" 
              name="email" 
              value={this.state.email}
              onChange={(e) => this.handleChange(e, "email")} 
            />
          </div>

          <div>
            <label>Username</label>
            <input 
              type="text" 
              id="username"
              placeholder="Username" 
              name="username" 
              value={this.state.username}
              onChange={(e) => this.handleChange(e, "username")} 
            />
          </div>

          <div>
            <label>Password</label>
            <input 
              type="password" 
              id="password"
              placeholder="Password" 
              name="password" 
              value={this.state.password}
              onChange={(e) => this.handleChange(e, "password")} 
            />
          </div>

          <div>
            <label>Confirm Password</label>
            <input 
              type="password" 
              id="password2"
              placeholder="Confirm Password" 
              name="password2" 
              value={this.state.password2}
              onChange={(e) => this.handleChange(e, "password2")} 
            />
          </div>

          <div>
            <button type="submit">Register Yourself</button>
          </div>
        </form>
      </div>
		);
	}
};

module.exports = UserRegister;