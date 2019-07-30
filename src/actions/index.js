import * as types from "./../constants/ActionStyles";
import axios from 'axios';

export const logIn = (userEmail, userPassword) =>{
	return {
		type : types.LOGIN,
		userEmail: userEmail,
		userPassword: userPassword
	}
}
export const loginAPI = (userEmail, userPassword) =>{
	return (dispatch) => {
		axios({
			method: "post",
			url: "https://terralogic-training.web.app/api/login",
			data:{
    			userEmail: userEmail,
				userPassword: userPassword
  			}
		})
			.then(res =>{
				localStorage.setItem("token", res.data.token);				
				console.log(res);
				dispatch(logIn(userEmail, userPassword))
			})
			.catch(er =>{
				alert("Check your userEmail and userPassword again")
			});
		};
};
export const signUp = (userEmail, userPassword) =>{
	return {
		type : types.SIGNUP,
		userEmail: userEmail,
		userPassword: userPassword
	}
}

export const singUpAPI= (userEmail, userPassword) =>{
	return (dispatch) => {
		axios({
				method: "post",
				url: "https://terralogic-training.web.app/api/sign_up",
				data:{
	    			userEmail: userEmail,
					userPassword: userPassword
	  			}
			})
			.then(res =>{
				console.log("res", res);
				alert("Sign Up Success");
				dispatch(signUp(userEmail, userPassword))
				
			})
			.catch(er =>{
				console.log("erro", er);
				alert("Sign Up Failed");
			});
	};
};

export const showProfile = state => {
	console.log(state);
  return {
    type: types.SHOW_PROFILE,
    state
  };
};
export const showProfileAPI = () => {
  return dispatch => {
    var token = localStorage.getItem("token");
    axios({
      method: "post",
      url: "https://terralogic-training.firebaseapp.com/api/get_profile",
      headers: {
        "x-user-token": token
      }
    })
      .then(res => {
        console.log(res);
        dispatch(showProfile(res.data.data));
       })
      .catch(er => {});
  };
};

export const updateProfile = (state) =>{
	return {
		type : types.UPDATE_PROFILE,
		state
};
};
export const UPDATE_PROFILE_API= (state) =>{
  return dispatch => {
    var token = localStorage.getItem("token");
    console.log("token:", token);
    axios({
      method: "post",
      url: "https://terralogic-training.firebaseapp.com/api/set_profile",
      headers: {
        "x-user-token": token
      },
      data:state
    })
      .then(res => {
        console.log(res);
        alert("Update Success");
        dispatch(updateProfile(res.data.data));
      })
      .catch(er => {
      	alert("Update Failed");
      });
  };
};