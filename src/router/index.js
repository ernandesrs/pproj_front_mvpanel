import { createRouter, createWebHistory } from 'vue-router'
import DashLayout from '../layouts/DashLayout'
import AuthLayout from '../layouts/AuthLayout'

import IndexView from '../views/IndexView.vue'
import AlertsView from '../views/Components/AlertsView.vue'
import CardsView from '../views/Components/CardsView.vue'
import ButtonsView from '../views/Components/ButtonsView.vue'
import FormsView from '../views/Components/FormsView.vue'

import LoginView from '../views/Auth/LoginView'
import RegisterView from '../views/Auth/RegisterView'

const routes = [
	{
		path: '/auth', name: '', component: AuthLayout,
		children: [
			{
				path: 'login',
				name: 'auth.login',
				component: LoginView
			},
			{
				path: 'register',
				name: 'auth.register',
				component: RegisterView
			},
		]
	},
	{
		path: '/', name: '', component: DashLayout,
		children: [
			{
				path: '',
				name: 'panel.index',
				component: IndexView
			},
			{
				path: '/componentes/alerts',
				name: 'panel.components.alerts',
				component: AlertsView
			},
			{
				path: '/componentes/cards',
				name: 'panel.components.cards',
				component: CardsView
			},
			{
				path: '/componentes/botoes',
				name: 'panel.components.buttons',
				component: ButtonsView
			},
			{
				path: '/componentes/formularios',
				name: 'panel.components.forms',
				component: FormsView
			}
		]
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
