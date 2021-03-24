import React from 'react';

const nameView = 'Horario';
const Horario = (props) => {
	React.useEffect(() => { //Equivalente a componentDidMount()
		document.title = nameView + " - eMatricula";
		props.changeViewName(nameView);
	}, []);
	return (
		<div>
			<h1>Horario</h1>
		</div>
	);
};

export default Horario;