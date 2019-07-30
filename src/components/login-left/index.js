import React, {Component} from 'react';
import './styles.scss';
import Register from '../../layout/register';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import axios from 'axios';


class Left extends Component{
	constructor(props) {
      super(props);
      this.signIn = this.signIn.bind(this);
      this.onHandleChange = this.onHandleChange.bind(this);
      this.state = {
        userEmail : '',
        userPassword : '',
        isLoading: false,
        token : ''
      };
    }

  signIn(event){
    event.preventDefault();
    this.props.onLogin(this.state.userEmail,this.state.userPassword);

  }
  onHandleChange(event){
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name] : value
    });
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      isLoading: nextProps.tasks.isLoading
    });
  }

  

  render(){
    return (
	    <div>
	      	<div className="col-md-12 Left">
				<div className="Login">
					<h2>LOGIN</h2>
					<form className="formLogin" action="" onSubmit={this.signIn}>
						Email:<br />
						<input 
            className="Email"
            type="text"  
            name ="userEmail" 
            onChange={this.onHandleChange} 
            value={this.state.userEmail}
            />
						<br />
						Password:<br />
						<input className="Pass" 
            type="password"  
            name ="userPassword" 
            onChange={this.onHandleChange}
            value={this.state.userPassword}
            />
						<button type="submit" className="btn btn-default button">LOGIN</button>
						<Link to ="/signup" className="register" ><button type="submit" className="btn btn-default register">SIGN UP</button></Link>
					</form>					
					<p>&copy; 2019 Terralogic.Inc</p>
				</div>
			</div>
	    </div>
  );
  }
}


const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
};

const mapDispatchToProps = (dispatch, props) =>{
  return{
    onLogin :(userEmail, userPassword) =>{
      dispatch(actions.loginAPI(userEmail, userPassword));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (Left);