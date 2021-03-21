import React from 'react';

const Perfil = () => {
	React.useEffect(() => { //Equivalente a componentDidMount()
		document.title = "Perfil - eMatricula"
	}, []);

	return(		
		<div>
			<h1>Perfil</h1>
		</div>
	);
};

export default Perfil;