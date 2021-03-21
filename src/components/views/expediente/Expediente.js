import React from 'react';

const Expediente = () => {
	React.useEffect(() => { //Equivalente a componentDidMount()
		document.title = "Expediente Académico - eMatricula"
	}, []);
	return (
		<div>
			<h1>Expediente Académico</h1>
		</div>
	);
};

export default Expediente;