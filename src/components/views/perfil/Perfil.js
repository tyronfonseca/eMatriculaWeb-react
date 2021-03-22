import React from 'react';
import Col from 'react-bootstrap/Col';

import CardCustom from '../../CardCustom/Card';
import FormProfile from '../../FormProfile/FormProfile';

//TODO: Implementar el UI estatico
const Perfil = () => {
	React.useEffect(() => { //Equivalente a componentDidMount()
		document.title = "Perfil - eMatricula"
	}, []);

	return(		
		<>
			<Col sm={4}>
				{/* <!-- Datos Institucionales --> */}
				<Col className="pb-4">
					{CardCustom("Datos Institucionales",
					 <ul className="list-clean">
						<li>Carnet: <span id="carnet">B83007</span></li>
						<li>Email: <span id="emailInstitucional">tyron.fonseca@ucr.ac.cr</span></li>
						<li>Beca: <span id="beca">5 Beca Socioeconómica</span></li>
						<li>Morosidad: <span id="morosidad">No posee morosidades</span></li>
					</ul>
					)}
				</Col>
				{/* <!-- Datos Ponderado --> */}
				<Col>
					{CardCustom("Promedios Ponderados",
						<ul className="list-clean">
							<li>Promedio ponderado matricula I-2021: <span id="pondMatricula"><span style={{color: "green"}}>8.92</span>  con carga académica de 24 créditos</span></li>
							<li>Promedio ponderado anual: <span id="pondAnual">8.98  (2020)</span></li>
							<li>Promedio ponderado total: <span id="pondTotal">8.9</span></li>
						</ul>
					)}
				</Col>
			</Col>
			<Col sm={6}>				
				{CardCustom("Datos Personales", FormProfile())}
			</Col>
		</>
	);
};

export default Perfil;