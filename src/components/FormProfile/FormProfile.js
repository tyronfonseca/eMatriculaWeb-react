import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import './FormProfile.css';

const FormProfile = () => {
	return (
		<Form>
			<input type="number" id="idStudent" hidden defaultValue="1"/>

			<Form.Group controlId="formName">
				<Form.Label>Nombre</Form.Label>
				<Form.Control type="text" placeholder="Nombre del estudiante" defaultValue="Tyron Fonseca Alvarado" readOnly={true} aria-describedby="desNameInput"/>
				<Form.Text className="d-none text-muted" id="desNameInput">Nombre completo del estudiante</Form.Text>
			</Form.Group>

			<Form.Group controlId="formID">
				<Form.Label>Cédula</Form.Label>
				<Form.Control type="text" placeholder="Formato: 0-0000-0000" defaultValue="155802920113" readOnly={true} aria-describedby="desIdInput" />
				<Form.Text className="d-none text-muted" id="desIdInput">Número de identificación personal del estudiante</Form.Text>
				<Form.Text className="text-muted">Si su número de identificación es incorrecto enviar correo electrónico a <a href="mailto:ingresocarrera.ori@ucr.ac.cr">ingresocarrera.ori@ucr.ac.cr</a></Form.Text>
			</Form.Group>

			<Form.Row>
				<Form.Group as={Col} controlId="tel1">
					<Form.Label>Teléfono 1</Form.Label>
					<Form.Control aria-describedby="desPhonesInput" placeholder="00000000" defaultValue="61237371"/>
				</Form.Group>
				<Form.Group as={Col} controlId="tel2">
					<Form.Label>Teléfono 2</Form.Label>
					<Form.Control aria-describedby="desPhonesInput" placeholder="00000000" defaultValue="61237371"/>
				</Form.Group>
				<Form.Group as={Col} controlId="tel2">
					<Form.Label>Teléfono 3</Form.Label>
					<Form.Control aria-describedby="desPhonesInput" placeholder="00000000" defaultValue="0"/>
				</Form.Group>
				<Form.Text className="d-none text-muted" id="desPhonesInput">Números de teléfono del estudiante</Form.Text>
			</Form.Row>

			<Form.Group controlId="formeEmail">
				<Form.Label>Correo Electrónico</Form.Label>
				<Form.Control type="email" placeholder="ejemplo@dominio.com" defaultValue="tyron.fonseca@hotmail.com" aria-describedby="desEmailInput" />
				<Form.Text className="d-none text-muted" id="desEmailInput">Correo electrónico personal del estudiante</Form.Text>
			</Form.Group>

			<Form.Row>
				<Form.Group as={Col} controlId="provincia">
					<Form.Label>Provincia</Form.Label>
					<Form.Control aria-describedby="desProvinciaInput" placeholder="" defaultValue="San José" />
					<Form.Text className="d-none text-muted" id="desProvinciaInput">Provincia de residencia del estudiante</Form.Text>
				</Form.Group>				
				<Form.Group as={Col} controlId="tel2">
					<Form.Label>Cantón</Form.Label>
					<Form.Control aria-describedby="desCantonInput" placeholder="" defaultValue="Goicoechea" />
					<Form.Text className="d-none text-muted" id="desCantonInput">Cantón de residencia del estudiante</Form.Text>
				</Form.Group>
				<Form.Group as={Col} controlId="tel2">
					<Form.Label>Distrito</Form.Label>
					<Form.Control aria-describedby="desDistritoInput" placeholder="" defaultValue="Guadalupe" />
					<Form.Text className="d-none text-muted" id="desDistritoInput">Distrito de residencia del estudiante</Form.Text>
				</Form.Group>
			</Form.Row>

			<Form.Group controlId="formDireccion">
				<Form.Label>Dirección Exacta</Form.Label>
				<Form.Control as="textarea" rows={3} cols={50} aria-describedby="desDireccionInput" defaultValue="DEL CRUCE DE MORAVIA Y GUADALUPE, 300 M ESTE 75 SUR CASA COLOR CELESTE #7" />
				<Form.Text className="d-none text-muted" id="desDireccionInput">Dirección exacta de residencia del estudiante</Form.Text>
			</Form.Group>

			<Button variant="primary" type="submit" className="btn-main">
				Actualizar
			</Button>
		</Form>
	);
}

export default FormProfile;