import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['../views/home'], resolve)
const En = resolve => require(['../views/en'], resolve)
const Cn = resolve => require(['../views/cn'], resolve)
const Work = resolve => require(['../views/work'], resolve)
const Project = resolve => require(['../views/project'], resolve)
const Banqiao = resolve => require(['../views/banqiao'], resolve)
const Kingcore = resolve => require(['../views/kingcore'], resolve)
const Person = resolve => require(['../views/person'], resolve)
const End = resolve => require(['../views/end'], resolve)

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
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/project',
      name: 'project',
      component: Project
    },
    {
      path: '/banqiao',
      name: 'banqiao',
      component: Banqiao
    },
    {
      path: '/kingcore',
      name: 'kingcore',
      component: Kingcore
    },
    {
      path: '/person',
      name: 'person',
      component: Person
    },
    {
      path: '/end',
      name: 'end',
      component: End
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
