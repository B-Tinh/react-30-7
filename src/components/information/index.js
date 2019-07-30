import React, {Component} from 'react';
import './styles.scss';

class Information extends Component{
  render(){
    return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<form className="formProfile" action="" method="Post">
							Display Name:<br />
							<input className="Name" placeholder="Your Name" type="text"  name ="name" required=""></input>
						</form>
					</div>
					<div className="col-md-6">
						<form className="formProfile" action="" method="Post">
							Display Info:<br />
							<input className="Info" placeholder="Your Info" type="text"  name ="info" required=""></input>
						</form>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<form className="formProfile" action="" method="Post">
							Email:<br />
							<input className="upEmail" placeholder="Your Email" type="text"  name ="userEmail" required=""></input>
						</form>
					</div>
					<div className="col-md-6">
						<form className="formProfile" action="" method="Post">
							Phone Number:<br />
							<input className="Phone" placeholder="Phone" type="text"  name ="phoneNumber" required=""></input>
						</form>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<form className="formProfile" action="" method="Post">
							New Password:<br />
							<input className="NewPassword" placeholder="Enter New Password" type="password"  name ="newPass" required=""></input>
						</form>
					</div>
					<div className="col-md-6">
						<form className="formProfile" action="" method="Post">
							Confirm Password:<br />
							<input className="ConfirmPassword" placeholder="Confirm Password" type="password"  name ="confirmPass" required=""></input>
						</form>
					</div>
				</div>
				<button type="button" class="btn btn-default update">UPDATE PROFILE</button>
			</div>
		</div>
  );
  }
}

export default Information;
