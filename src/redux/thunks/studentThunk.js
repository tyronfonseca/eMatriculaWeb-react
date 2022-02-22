import api, { EndPoints as EP } from '../../api/apiConection'
import * as actions  from '../actions/studentActions';


export const getStudentById = id => async(dispatch) => {
	try{
		dispatch(actions.loadStudentInProgress());
		const response = await api.get(`${EP.student}/${id}`);
		dispatch(actions.loadStudentSuccess(response.data));
	}catch(error){
		dispatch(actions.loadStudentFailure());
		dispatch(displayAlert(error));
	}
}


export const getCoursesById = id => async(dispatch) => {
	try {
		dispatch(actions.loadStudentInProgress());
		const response = await api.get(`${EP.courses}/${id}`);
		dispatch(actions.loadStudentCoursesSuccess(response.data));
	} catch (error) {
		dispatch(actions.loadStudentFailure());
		dispatch(displayAlert(error));
	}
}

export const updateStudent = student => async (dispatch) => {
	try {
		dispatch(actions.loadStudentInProgress());
		const headers = {
			'Content-Type': 'application/json; charset=UTF-8'
		};
		const response = await api.put(`${EP.student}/${student.id}`, student, headers);
		dispatch(actions.loadStudentCoursesSuccess(response.data));
	} catch (error) {
		dispatch(actions.loadStudentFailure());
		dispatch(displayAlert(error));
	}
}

export const displayAlert = text => () => {
	alert(text);
};