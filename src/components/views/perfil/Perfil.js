import React from 'react';
import {connect} from 'react-redux';

import Col from 'react-bootstrap/Col';
import CardCustom from '../../CardCustom/Card';
import FormProfile from '../../FormProfile/FormProfile';

import {getStudentLoading, getStudent} from '../../../redux/selectors/selector';
import {getStudentById} from '../../../redux/thunks/studentThunk';

const nameView = 'Perfil';

const Perfil = ({ isLoading, startLoadingStudent, student, changeViewName }) => {
	React.useEffect(() => { 
		startLoadingStudent(1);
		document.title =  nameView +" - eMatricula";	
		changeViewName(nameView);		
	}, []);

	const loadingMessage = <div>Cargando información....</div>;
	const content = (		
		<>
	 		<Col sm={4}>
	 			{/* <!-- Datos Institucionales --> */}
	 			<Col className="pb-4">
	 				{CardCustom("Datos Institucionales",
	 				 <ul className="list-clean">
	 					<li>Carnet: <span id="carnet">{student.uniId}</span></li>
	 					<li>Email: <span id="emailInstitucional">{student.uniEmail}</span></li>
	 					<li>Beca: <span id="beca">{student.scholarship}</span></li>
	 					<li>Morosidad: <span id="morosidad">{student.debt}</span></li>
	 				</ul>
	 				)}
	 			</Col>
	 			{/* <!-- Datos Ponderado --> */}
	 			<Col className="pb-4">
	 				{CardCustom("Promedios Ponderados",
	 					<ul className="list-clean">
	 						<li>Promedio ponderado matricula I-2021: <span id="pondMatricula"><span style={{color: "green"}}>8.92</span>  con carga académica de 24 créditos</span></li>
	 						<li>Promedio ponderado anual: <span id="pondAnual">8.98  (2020)</span></li>
	 						<li>Promedio ponderado total: <span id="pondTotal">8.9</span></li>
	 					</ul>
	 				)}
	 			</Col>
	 			<Col className="pb-4">
	 				{CardCustom("Carrera(s)",
	 					<ul className="list-clean">
	 					{student.careers && student.careers.map((career, id) => (
	 						<li key={id}>{career.name}</li>
	 					))}
	 					</ul>
	 				)}
	 			</Col>				
	 		</Col>
	 		<Col sm={6} className="pb-4">
	 			{CardCustom("Datos Personales", FormProfile(student))}
	 		</Col>
	 	</>
	 );
	return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
	isLoading: getStudentLoading(state),
	student: getStudent(state)
});

const mapDispatchToProps = dispatch => ({
	startLoadingStudent: (id) =>  dispatch(getStudentById(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Perfil);