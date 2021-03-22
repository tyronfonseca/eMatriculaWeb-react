import React from 'react';

const routes = {
	PERFIL: {
		path: '/',
		component: React.lazy(() => import('../components/views/perfil/Perfil'))
	},
	MATRICULA: {
		path: '/matricula',
		component: React.lazy(() => import('../components/views/matricula/Matricula'))
	},
	PLAN: {
		path: '/plan',
		component: React.lazy(() => import('../components/views/plan/Plan'))
	},
	EXPEDIENTE: {
		path: '/expediente',
		component: React.lazy(() => import('../components/views/expediente/Expediente'))
	},
	HORARIO: {
		path: '/horario',
		component: React.lazy(() => import('../components/views/horario/Horario'))
	},
	// ACCESIBILIDAD: {
	// 	path: 'accesibilidad',
	// 	component: React.lazy(() => import('../components/views/accesibilidad/Accesibilidad'))
	// },
	NOTFOUND: {
	 	path: '*',
	 	component: React.lazy(() => import('../components/views/messages/NotFound'))
	},
};

export default routes;