// This is a representation of the Json response of GET api/student/1
const studentMock = {data: 
  {
    id: 1,
    name: "Tyron Fonseca Alvarado",
    scholarship: "Sin beca",
    debt: "No posee morosidades",
    uniId: "B88003",
    personalId: "1010102301",
    phoneNumber: "22537948",
    uniEmail: "tyron.fonseca@ucr.ac.cr",
    personalEmail: "tyron@example.com",
    province: "Ejemplo",
    canton: "Goicoechea",
    distric: "Guadalupe",
    exactAddress: "A la par del automercado",
    isActive: true,
    rowVersion: "AAAAAAAAVfE=",
    careers: [
      {
        id: 1,
        name: "BACH.EN BIBLIOTECOLOGIA ENF.CS. DE LA INFORMACION",
        number: 320401,
        campus: 11,
        rowVersion: "AAAAAAAAF4A=",
      },
      {
        id: 2,
        name: "BACH. EN COMPUTACION CON VARIOS ENFASIS",
        number: 420705,
        campus: 11,
        rowVersion: "AAAAAAAAF4E=",
      },
    ],
    counselors: [
      {
        id: 1,
        timeTable: "9:00 a.m. 1:00 a.m.. 4:00 p.m.",
        office: "233 IF",
        telephone: "",
        professor: {
          id: 1,
          name: "Daft Punk",
          contactEmail: "df@ucr.ac.cr",
          rowVersion: "AAAAAAAAF3M=",
        },
        rowVersion: "AAAAAAAAF3c=",
      },
    ],
  },
};

export default studentMock;