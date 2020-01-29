import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import './Login.css'

class Login extends Component {
 constructor() {
    super();
    this.state = {
      fields: {
        username: "",
        password: ""
      },
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
    console.log(this.state.fields);
  }
 //submitting Form
  submit(e) {
    e.preventDefault();
    const { username, password } = this.state.fields;
    if(this.validateForm()){
      this.setState({ error: false });
       if ((username === 'User' && password === 'user123')) {
            console.log(" User logged In")
            return this.props.history.push('/dashboard/User')
        }
          
    
        if ((username === 'Admin' && password === 'adm123')) {
             console.log(" Admin logged In")
            return this.props.history.push('/dashbord/Admin')
          }
            
    
        if ((username === 'Developer' && password === 'dev123')) {
             console.log(" Developer logged In")
             return this.props.history.push('/dashboard/Developer')
      }
      this.props.history.push('/404')
    }
  }
   
  

    //   Form Validation
  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }
     
   if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

  this.setState({
      errors: errors
    });
    return formIsValid;
  }



render() {
  return (
    <React.Fragment>
  <div className="wrapper">
    
   <div className="form-wrapper">
   
      <h1>LOGIN</h1>
      <form
       method="post" 
       name="login"  onSubmit= {this.submit} >
      <div className="Username">
      <label>UserName</label>
      <input type="text" 
      name="username"
      placeholder="UserName"
       value={this.state.fields.username}
        onChange={this.handleChange} />
      <div className="errorMsg">
        {this.state.errors.username}</div>
      </div>
      <div className="password">
      <label>Password</label>
      <input type="password" 
     name="password"
      placeholder="Password"
       value={this.state.fields.password}
        onChange={this.handleChange} />
      <div className="errorMsg">
        {this.state.errors.password}</div>
      </div>
      <div className="Login">
      <button type="submit">Login</button> 
      <small>Forgot Password?</small>
      </div>
      </form>
  </div>
</div>
</React.Fragment>
);
}
}

export default withRouter(Login);
