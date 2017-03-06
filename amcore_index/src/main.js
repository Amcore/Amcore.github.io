// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Icon from 'vue-icon'
import AmLoad from './components/am-load'
import './assets/styles/index.css'
import 'normalize.css/normalize.css'

Vue.component('am-icon', Icon)
Vue.component('AmLoad', AmLoad)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
