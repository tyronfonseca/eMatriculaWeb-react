import React from 'react';
import {useLocation} from 'react-router-dom';

const NotFound = () => {
	const location = useLocation();
	React.useEffect(() => { //Equivalente a componentDidMount()
		document.title = "404 - Contenido no encontrado"
	}, []);

	return (
		<div>
			<h1>404 - Contenido no encontrado</h1>
			<p>El link <code>{location.pathname}</code> es incorrecto.</p>
		</div>
	);
};

export default NotFound;