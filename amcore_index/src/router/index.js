import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['../views/home'], resolve)
const Me = resolve => require(['../views/me'], resolve)
const Like = resolve => require(['../views/like'], resolve)
const Date = resolve => require(['../views/date'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/me',
          name: 'Me',
          component: Me
        },
        {
          path: '/like',
          name: 'like',
          component: Like
        },
        {
          path: '/date',
          name: 'date',
          component: Date
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
