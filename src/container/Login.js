import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      fields: {},
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

  }

  submit(e) {
    e.preventDefault();
    if (this.validateForm()) {
        let fields = {};
        fields["username"] = "";
        fields["password"] = "";
        this.setState({fields:fields});
        this.props.history.push('/dashboard');
    }

  }

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
  <div className="wrapper">
  <div className="form-wrapper">
      <h1>Login</h1>
      <form method="post"  name="login"  onSubmit= {this.submit} >
      <div className="firstName">
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
      <div className="login">
      <input type="submit" 
      className="button" 
       value="Login"/>
      </div>
      </form>
  </div>
</div>

    );
}


}


export default withRouter(Login);

 
//  const formValid = formErrors => {
//  let valid = false;

//  Object.values(formErrors).forEach(val => {
// val.length > 0 && (valid = false);
// });

//   return valid;
//  };

//  class Login extends Component {
//     constructor(props) {
//         super(props);
//  this.state = {
//           userName: null,
//           password: null,
//           formErrors: {
//             userName: "",
//             password: ""
//           }
//         }
//       }
    
//       handleSubmit = e => {
//       e.preventDefault();
   
//        if (formValid(this.state.formErrors)) {
//         this.props.history.push('/dashboard');
//         console.log(`
//         --SUBMITTING--
//         User Name: ${this.state.firstName}
//         Password: ${this.state.password}
//         `)
//          } else {
//           alert('Invalid');
//         }
//        }
//       handleChange = e => {
//         e.preventDefault();
//         const { name, value } = e.target;
//         let formErrors = this.state.formErrors;
//       // this.setState ({
//       //   [name] : value )}
//       console.log("Name:", name)
//       console.log("value:", value)

//         switch (value) {
//           case 'userName':
//             formErrors.userName =
//               value.length < 3
//                 ? "minimum 3 characters required"
//                 : "";
//             break;
      
//           case 'password':
//             formErrors.password =
//               value.length < 6 
//                 ? "minimum 6 characters required"
//                 : "";
//             break;
//           default:
//             break;
//         }
//         this.setState({ formErrors, [name]: value }, () =>
//          console.log(this.state));
//       }
//   render() {
//     const { formErrors } = this.state
//     return (
//         <div className="wrapper">
//         <div className="form-wrapper">
//           <h1>Login</h1>
//           <form onSubmit={this.handleSubmit} noValidate>
//             <div className="userName">
//               <label htmlFor="userName">User Name</label>
//               <input 
//               type="text"
//               value={this.state.userName}
//               className={formErrors.userName.length > 0 ? "error" : null}
//                 placeholder="userName"
//                 name="userName"
               
//                 onChange={this.handleChange}
//               />
//               {formErrors.userName.length > 0 && (
//                 <span className="errorMessage">{formErrors.userName}</span>
//               )}
//             </div>
//             <div className="password">
//             <label htmlFor="password">Password</label>
//             <input
           
//             value={this.state.password}
//               className={formErrors.password.length > 0 ? "error" : null}
//               placeholder="password"
//               type="password"
//               name="password"
           
//               onChange={this.handleChange} />
//                {formErrors.password.length > 0 && (
//               <span className="errorMessage">{formErrors.password}</span>
//             )}
//           </div>
//             <div className="Login">
          
            
//             <button
//             type="submit">Login </button> 
//             <br/> 
//             <small>Forgot Password?</small> 
           
//         </div>
//         </form>
//         </div>
//         </div>
//     );
//   }
// }

// export default withRouter(Login);
