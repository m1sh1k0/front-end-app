import Vue from 'vue'
import App from './App.vue'
import { UserPage } from './components/UserPage'
import { BootstrapVue } from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Router from 'vue-router'

Vue.use(Router)
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)

const routes = [{ path: '/user:id', component: UserPage }]
const router = new Router({
  routes
})
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router
}).$mount('#app')
