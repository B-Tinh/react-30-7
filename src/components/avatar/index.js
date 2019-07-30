import React, {Component} from 'react';
import './styles.scss';

class Avatar extends Component{
  render(){
    return (
		<div>
			<div className="container">
				<div className="avatar">
					<img alt="avatar" src="./images/55089.png" />
					<div className="penis">
						<img alt="pencil" src="./images/SoftwareIcons-68-512.png" />
					</div>
				</div>
			</div>
		</div>
  );
  }
}

export default Avatar;