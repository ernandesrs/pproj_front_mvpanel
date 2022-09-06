import { createRouter, createWebHistory } from 'vue-router'
import DashLayout from '../layouts/DashLayout'
import IndexView from '../views/IndexView.vue'
import CardsView from '../views/Components/CardsView.vue'
import ButtonsView from '../views/Components/ButtonsView.vue'

const routes = [
  {
    path: '/', name: '', component: DashLayout,
    children: [
      {
        path: '',
        name: 'panel.index',
        component: IndexView
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
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
