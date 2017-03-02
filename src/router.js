import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'login',
  component: require('./views/login')
}, {
  path: '/reg',
  name: 'reg',
  component: require('./views/reg')
}, {
  path: '/project',
  name: 'project',
  component: require('./views/project'),
  children: [{
    path: '/admin',
    name: 'admin',
    component: require('./views/admin')
  }, {
    path: '/commodity',
    name: 'commodity',
    component: require('./views/commodity')
  }, {
    path: '/commodity-edit',
    name: 'commodityedit',
    component: require('./views/commodity-edit')
  }]
}, {
  path: '/test',
  name: 'test',
  component: require('./views/test')
}, {
  path: '*',
  redirect: '/'
}]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
