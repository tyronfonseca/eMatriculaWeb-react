import "bootstrap/dist/css/bootstrap.min.css"

import React from 'react';
import {hot} from 'react-hot-loader';
//import styled from 'styled-components';

import {Container, Row} from 'react-bootstrap';

const App = () => {

	React.useEffect(() => { //Equivalente a componentDidMount()
			document.title = "Ingreso al sistema - eMatricula"
		}, []);	

	return (
		<Container>
			<Row className="justify-content-center">
				hola
  			</Row>
		</Container>
	);
}




export default hot(module)(App);