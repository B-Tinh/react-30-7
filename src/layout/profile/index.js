import React, {Component} from 'react';
import './styles.scss';
import Avatar from '../../components/avatar';
import Information from '../../components/information';

class Profile extends Component{
	render(){
		return(
			<div>
				<div className="container">
					<div className="jumbotron between">
						<div className="main-content">
							<Avatar />
							<Information />
						</div>
					</div>
				</div>
			</div>





			)
	}
}

export default Profile;