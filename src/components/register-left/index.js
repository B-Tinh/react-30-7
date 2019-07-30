import React, {Component} from 'react';
import './styles.scss';
import Login from '../../layout/login';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


class RegisterLeft extends Component{
  render(){
    return (
	    <div>
	      	<div className="col-md-12 Regis-Left">
				<div className="Sign-up">
					<h2>SIGN UP</h2>
					<form className="formSign" action="">
						Email:<br />
						<input onChange={this.handleEmailChange} className="Sign-Email" placeholder="" type="text"  name ="userEmail" required=""></input>
						<br />
						Password:<br />
						<input onChange={this.handlePasswordChange} className="Sign-Pass" placeholder="" type="password"  name ="pws" required=""></input>
						<br />
						Confirm Password:<br />
						<input className="ConfirmPass" placeholder="" type="password"  name ="pws" required=""></input>
					</form>
					<Link  to ="/"><button type="button" className="btn btn-default sign-up" onClick={this.signUp}>SIGN UP</button></Link>
					<p>&copy; 2019 Terralogic.Inc</p>
				</div>
			</div>
	    </div>
  );
  }
}

export default RegisterLeft;