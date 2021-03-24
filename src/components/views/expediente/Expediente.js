import React from 'react';

const nameView = 'Expediente Académico';

const Expediente = (props) => {
	React.useEffect(() => { //Equivalente a componentDidMount()		
		document.title = nameView + " - eMatricula";
		props.changeViewName(nameView);
	}, []);
	return (
		<div>
			<h1>Expediente Académico</h1>
		</div>
	);
};

export default Expediente;