import React from 'react';
import Col from 'react-bootstrap/Col';

import CardCustom from '../../CardCustom/Card';
import FormProfile from '../../FormProfile/FormProfile';

import studentMock from '../../../data/mockUser';


const student = studentMock[0];
const nameView = 'Perfil';

const Perfil = (props) => {		
	React.useEffect(() => { //Equivalente a componentDidMount()
		document.title =  nameView +" - eMatricula";	
		props.changeViewName(nameView);
	}, []);

	return(		
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
						{student.careers.map((career, id) => (
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
};

export default Perfil;