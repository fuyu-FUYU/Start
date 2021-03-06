import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '../views/start.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
