import React from 'react';
import * as io from "react-icons/io5";

const sizeIcon = 25;

export const SideBarData = [
	{
		title: "Perfil",
		path: "",
		icon: <io.IoPersonOutline size={sizeIcon} />
	},
	{
		title: "Matricula",
		path: "matricula",
		icon: <io.IoDocumentTextOutline size={sizeIcon} />
	},
	{
		title: "Plan de Estudios",
		path: "plan",
		icon: <io.IoLibraryOutline size={sizeIcon} />
	},
	{
		title: "Expediente Académico",
		path: "expediente",
		icon: <io.IoSchoolOutline size={sizeIcon}/>
	},
	{
		title: "Horario",
		path: "horario",
		icon: <io.IoCalendarOutline size={sizeIcon}/>
	},
	{
		title: "Accesibilidad",
		path: "accesibilidad",
		icon: <io.IoAccessibilityOutline size={sizeIcon} />
	},
	{
		title: "Salir",
		path: "#",
		icon: <io.IoLogOutOutline size={sizeIcon} />
	}
];