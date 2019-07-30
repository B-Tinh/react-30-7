import * as types from './../constants/ActionStyles';
import axios from 'axios';


var initalState = {
	userEmail : '',
    userPassword : '',
    isLoading: false,
    token : ''
};

var myReducer = (state = initalState, action) =>{
	switch(action.type){
		case types.LOGIN:
			alert("Login Success");
			return{
				...state,
				userEmail : action.userEmail,
		        userPassword : action.userPassword,
		        isLoading: false,
		        token : action.token
			};

		case types.SIGNUP:
		return{
			...state,
			userEmail : action.userEmail,
			userPassword : action.userPassword
		}
		default: return state;
	}
}

export default myReducer;