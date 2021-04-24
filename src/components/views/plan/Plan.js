import React from 'react';

const nameView = 'Plan de Estudios';

const Plan = (props) => {
	React.useEffect(() => {
		document.title = nameView + " - eMatricula";
		props.changeViewName(nameView);
	}, []);


	return (
			<h1>Plan de Estudios</h1>	
	);
};

export default Plan;