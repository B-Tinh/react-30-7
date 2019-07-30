import {combineReducers} from 'redux';
import task from './task';
import profile from './profile';


const myReducer = combineReducers({
	task,
	profile
});

export default myReducer;