import React from 'react';

const Plan = () => {
	React.useEffect(() => { //Equivalente a componentDidMount()
		document.title = "Plan de Estudios - eMatricula"
	}, []);


	return (
			<h1>Plan de Estudios</h1>	
	);
};

export default Plan;