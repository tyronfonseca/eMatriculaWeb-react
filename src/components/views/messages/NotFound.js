import React from 'react';
import {useLocation} from 'react-router-dom';

const NotFound = (props) => {
	const location = useLocation();
	React.useEffect(() => { //Equivalente a componentDidMount()
		document.title = "404 - Contenido no encontrado"
		props.changeViewName('');
	}, []);

	return (
		<div>
			<h1>404 - Contenido no encontrado</h1>
			<p>El link <code>{location.pathname}</code> es incorrecto.</p>
			<img className="" src={require('../../../img/404.jpg')} width="200" height="200" alt="Imagen de error 404" />
		</div>
	);
};

export default NotFound;