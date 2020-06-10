import Vue from 'vue'
import VueRouter from 'vue-router'
import UsersTable from '../components/UsersTable'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: UsersTable
  },
  {
    path: '/user/:id',
    name: 'UserPage',
    component: () => import('../components/UserPage')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
