import {types as actions} from '../actions/studentActions';

const initialState = {isLoading: false, data: []};


export const student = (state = initialState, action) => {
	const {type, payload} = action;
	switch (type) {
		case actions.CREATE_STUDENT:{
			const {student} = payload;
			return {
				...state,
				data: state.data.concat(student)
			};
		}		
		case actions.LOAD_STUDENT_IN_PROGRESS: {
			const { student } = payload;
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
		default:
			return state;
	}
};

export default student;