export const types = {
	CREATE_STUDENT : 'CREATE_STUDENT',
	LOAD_STUDENT_IN_PROGRESS: 'LOAD_STUDENT_IN_PROGRESS',
	LOAD_STUDENT_FAILURE: 'LOAD_STUDENT_FAILURE',
	LOAD_STUDENT_SUCCESS: 'LOAD_STUDENT_SUCCESS',
	UPDATE_STUDENT: 'UPDATE_STUDENT',
	DELETE_STUDENT: 'DELETE_STUDENT',
	LOAD_STUDENT_COURSES_SUCCESS: 'LOAD_STUDENT_COURSES_SUCCESS'
}

export const createStudent = student => ({
	type: types.CREATE_STUDENT,
	payload: {student}
});

export const loadStudentInProgress = () => ({
	type: types.LOAD_STUDENT_IN_PROGRESS,	
	payload: 'In progress',
});

export const loadStudentSuccess = student => ({
	type: types.LOAD_STUDENT_SUCCESS,
	payload: { student }
});

export const loadStudentFailure = () => ({
	type: types.LOAD_STUDENT_FAILURE,
	payload: 'Failure',
});

export const updateStudent = student => ({
	type: types.UPDATE_STUDENT,
	payload: { student }
});

export const deleteStudent = student => ({
	type: types.DELETE_STUDENT,
	payload: { student }
});

export const loadStudentCoursesSuccess = courses => ({
	type: types.LOAD_STUDENT_COURSES_SUCCESS,
	payload: { courses }
});
