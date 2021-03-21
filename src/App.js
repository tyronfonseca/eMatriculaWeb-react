import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React from 'react';
import {hot} from 'react-hot-loader';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SideBar from './components/SideBar/SideBar';

//TODO: Crear rutas de manera dinamica (Code Splitting)
import Expediente from './components/views/expediente/Expediente';
import Horario from './components/views/horario/Horario';
import Matricula from './components/views/matricula/Matricula';
import Perfil from './components/views/perfil/Perfil';
import Plan from './components/views/plan/Plan';



const App = () => {
	return (		
		<>
			<Router>
				<SideBar />
				<Container fluid>
					<Row className="justify-content-center">
						<Switch>
							<Route path='/' exact component={Perfil} />
							<Route path='/perfil'   component={Perfil}/>
							<Route path='/matricula'  component={Matricula}/>
							<Route path='/plan'  component={Plan}/>
							<Route path='/expediente'  component={Expediente}/>
							<Route path='/horario'   component={Horario}/>
						</Switch>
					</Row>
				</Container>				
			</Router>			
			
		</>
	);
}




export default hot(module)(App);