const addZero = data => {
	data = data.toString();
	data = data.length == 1 ? '0' + data : data;
	return data;
};

const clock = () => {
	var x = new Date();
	x = addZero(x.getDate()) + "/" + addZero((x.getMonth() + 1)) + "/" + x.getFullYear() + " - "+ addZero(x.getHours()) + ":" + addZero(x.getMinutes()) + " horas";
	return 'Fecha del servidor: ' + x;	
};

export default clock;