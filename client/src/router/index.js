import { createRouter, createWebHistory } from 'vue-router'
import FormView from '../views/FormView.vue'
import ListView from '../views/ListView.vue'
import LoginView from '../views/LoginView.vue'


const routes = [
  {
    path: '/form',
    name: 'FormView',
    component: FormView
  },
  {
    path: '/list',
    name: 'ListView',
    component: ListView
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
