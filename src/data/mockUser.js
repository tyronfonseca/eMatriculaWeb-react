// This is a representation of the Json response of GET api/student/1
const studentMock = [{
	"id": 1,
	"name": "Tyron Fonseca Alvarado",
	"scholarship": "Sin beca",
	"debt": "No posee morosidades",
	"uniId": "B88003",
	"personalId": "1010102301",
	"phoneNumber": "22537948",
	"uniEmail": "tyron.fonseca@ucr.ac.cr",
	"personalEmail": "tyron.fonseca@hotmail.com",
	"province": "San José",
	"canton": "Goicoechea",
	"distric": "Guadalupe",
	"exactAddress": "DEL CRUCE DE MORAVIA Y GUADALUPE, 300 M ESTE 75 SUR CASA COLOR CELESTE #7",
	"isActive": true,
	"careers": [
		{
			"id": 1,
			"name": "BACH.EN BIBLIOTECOLOGIA ENF.CS. DE LA INFORMACION",
			"number": 320401,
			"campus": 11,
		},
		{
			"id": 2,
			"name": "BACH. EN COMPUTACION CON VARIOS ENFASIS",
			"number": 420705,
			"campus": 11,
		}
	],
	"counselors": [
		{
			"id": 1,
			"timeTable": "9:00 a.m. 1:00 a.m.. 4:00 p.m.",
			"office": "233 IF",
			"telephone": "",
			"professor": {
				"id": 1,
				"name": "Daft Punk",
				"contactEmail": "df@ucr.ac.cr",
			},
		}
	]
}]

export default studentMock;