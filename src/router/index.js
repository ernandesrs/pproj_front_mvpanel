import { createRouter, createWebHistory } from 'vue-router'
import DashLayout from '../layouts/DashLayout'
import IndexView from '../views/IndexView.vue'

const routes = [
  {
    path: '/',
    name: '',
    component: DashLayout,
    children: [
      {
        path: '',
        name: 'panel.index',
        component: IndexView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
