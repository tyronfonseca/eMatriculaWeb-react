import React from 'react';

const Matricula = () => {
	React.useEffect(() => { //Equivalente a componentDidMount()
		document.title = "Matricula - eMatricula"
	}, []);
	return (
		<div>
			<h1>Matricula</h1>
		</div>
	);
};

export default Matricula;