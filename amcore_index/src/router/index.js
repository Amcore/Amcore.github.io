import Vue from 'vue'
import Router from 'vue-router'

const Home = require('../views/home')
const En = require('../views/en')
const Cn = require('../views/cn')
const Work = require('../views/work')
const Project = require('../views/project')
const Banqiao = require('../views/banqiao')
const Kingcore = require('../views/kingcore')
const Person = require('../views/person')
const Self = require('../views/self')
const End = require('../views/end')
const Andon = require('../views/andon')
const Printos = require('../views/printos')
const Test = require('../views/test')

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
      path: '/andon',
      name: 'andon',
      component: Andon
    },
    {
      path: '/printos',
      name: 'printos',
      component: Printos
    },
    {
      path: '/self',
      name: 'self',
      component: Self
    },
    {
      path: '/end',
      name: 'end',
      component: End
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
