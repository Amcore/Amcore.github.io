// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './views/app'
import router from './router'

import Message from 'assets/scripts/amessage'
import 'font-awesome/css/font-awesome.min.css'
import 'normalize.css/normalize.css'
import './assets/style/total.scss'
import './assets/style/var.scss'
import 'animate.css'
import store from './vuex/store'
import VueOccupy from 'vue-occupy'

/* eslint-disable no-new */
Vue.use(VueOccupy)
Vue.prototype.$message = Message
const app = new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
export default app

function fn() {
  console.log(this)
}
const obj = {
  name: 'admin'
}

fn.call(obj)
