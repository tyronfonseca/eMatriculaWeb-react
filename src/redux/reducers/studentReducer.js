import {types as actions} from '../actions/studentActions';

const initialState = {isLoading: false, data: [], courses: []};


const student = (state = initialState, action) => {
	const {type, payload} = action;
	switch (type) {
		case actions.CREATE_STUDENT:{
			const {data} = payload;
			return {
				...state,
				data: state.student.data.concat(data)
			};
		}		
		case actions.LOAD_STUDENT_IN_PROGRESS: {
			return {
				...state,
				isLoading: true
			};
		}
		case actions.LOAD_STUDENT_SUCCESS: {
			const { student } = payload;
			return {
				
				...state,				
				isLoading: false,				
				data: student,
			};
		}
		case actions.LOAD_STUDENT_FAILURE: {
			return {
				...state,
				isLoading: false,
			};
		}
		case actions.LOAD_STUDENT_COURSES_SUCCESS: {
			const { courses } = payload;
			return {

				...state,
				isLoading: false,
				courses: courses,
			};
		}
		default:
			return state;
	}
};

export default student;