import axios from 'axios';
import CONNECTIONS from '../../config';
import * as actions  from '../actions/studentActions';

const {EMATRICULA_API} = CONNECTIONS;

export const getStudentById = id => async(dispatch) => {
	try{
		dispatch(actions.loadStudentInProgress());
		const url = `${EMATRICULA_API}/student/${id}`;
		const response = await axios.get(url);		
		dispatch(actions.loadStudentSuccess(response.data));
	}catch(error){
		dispatch(actions.loadStudentFailure());
		dispatch(displayAlert(error));
	}
}


export const getCoursesById = id => async(dispatch) => {
	try {
		dispatch(actions.loadStudentInProgress());
		const url = `${EMATRICULA_API}/courses/${id}`;
		const response = await axios.get(url);
		dispatch(actions.loadStudentCoursesSuccess(response.data));
	} catch (error) {
		dispatch(actions.loadStudentFailure());
		dispatch(displayAlert(error));
	}
}

export const displayAlert = text => () => {
	alert(text);
};