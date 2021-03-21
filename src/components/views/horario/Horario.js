import React from 'react';

const Horario = () => {
	React.useEffect(() => { //Equivalente a componentDidMount()
		document.title = "Horario - eMatricula"
	}, []);
	return (
		<div>
			<h1>Horario</h1>
		</div>
	);
};

export default Horario;