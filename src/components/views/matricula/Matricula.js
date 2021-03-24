import React from 'react';

const nameView = 'Matricula';

const Matricula = (props) => {
	React.useEffect(() => { //Equivalente a componentDidMount()
		document.title = nameView + " - eMatricula";
		props.changeViewName(nameView);
	}, []);
	return (
		<div>
			<h1>Matricula</h1>
		</div>
	);
};

export default Matricula;