import React, {Component} from 'react';
import './styles.scss';
import RegisterLeft from '../../components/register-left';
import Right from '../../components/login-right';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios';

class Register extends Component{

  
  render(){
    return (
        <div>
          <form className="form-signin">
            <h2 className="form-signin-heading">Please sign up</h2>
            <label className="sr-only">Name</label>
            <input type="name" onChange={this.handleNameChange} id="inputName" className="form-control" placeholder="Name" required  />
            <label className="sr-only">Email address</label>
            <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required  />
            <label className="sr-only">Password</label>
            <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />           
            <button className="btn btn-lg btn-primary btn-block" onClick={this.signUp} type="button">Sign up</button>
          </form>
          <div>
            <Link to="/">{'Signin'}</Link>
          </div>
        </div>

  );
  }
}

export default Register;
