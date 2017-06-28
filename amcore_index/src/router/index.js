import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['../views/home'], resolve)
const En = resolve => require(['../views/en'], resolve)
const Cn = resolve => require(['../views/cn'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/en',
      name: 'en',
      component: En
    },
    {
      path: '/cn',
      name: 'Cn',
      component: Cn
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
