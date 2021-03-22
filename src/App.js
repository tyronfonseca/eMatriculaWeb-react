import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React, { Suspense } from 'react';
import {hot} from 'react-hot-loader';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SideBar from './components/SideBar/SideBar';

import routes from './constants/routesSidebar'

const App = () => {
	return (		
		<>
			<Router>						
				<Container fluid>
					<SideBar />
					<Row className="justify-content-center">
						<Suspense fallback={<div>Cargando...</div>}>
						<Switch>
							{Object.values(routes).map((route) => (
								<Route
								exact
								key={route.path}
								path={route.path}
								component={route.component}
								/>								
							))}
						</Switch>
						</Suspense>
					</Row>
				</Container>				
			</Router>						
		</>
	);
}

export default hot(module)(App);