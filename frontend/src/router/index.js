import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import toyApp from '../views/toyApp.vue'
import toyDetails from '../views/toyDetails.vue'
import toyToEdit from '../views/toyEdit.vue'
import dashboard from '../views/dashboard.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/toy',
    component: toyApp
  },
  {
    path: '/toy/edit/:toyId',
    component: toyToEdit
  },
  {
    path: '/toy/:toyId',
    component: toyDetails
  },
  {
    path: '/dashboard',
    component: dashboard
  },
]



const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router