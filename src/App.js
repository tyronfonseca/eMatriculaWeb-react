import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React, { Suspense, useState, Component } from 'react';
import {hot} from 'react-hot-loader';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SideBar from './components/SideBar/SideBar';

import routes from './constants/routesSidebar'

class App extends Component {
	constructor(props){
		super(props);
		this.state = {viewName : ''};
		this.changeViewName = this.changeViewName.bind(this);
	}
	
	changeViewName(name){
		this.setState({viewName: name});
	}

	render() {
		return (		
			<>
				<Router>						
					<Container fluid>
						<SideBar nameView={this.state.viewName}/>
						<Row className="justify-content-center">
							<Suspense fallback={<div>Cargando UI...</div>}>
							<Switch>
									{Object.values(routes).map(({ component: Cmp, ...route}) => (
									<Route
									exact
									key={route.path}
									path={route.path}
									render = {props => <Cmp {...props} changeViewName= {this.changeViewName.bind(this)}/>}
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
}

export default hot(module)(App);