import Vue from 'vue'
import Vuex from 'vuex'
import todosModule from './modules/count'

// Vue.use(Vuex)
// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   getters: {
//     count: state => state.count
//   },
//   mutations: {
//     increment: state => state.count++,
//     decrement: state => state.count--
//   },
//   actions: {
//     increment: ({ commit }) => {
//       commit('increment')
//     },
//     decrement: ({ commit }) => {
//       commit('decrement')
//     }
//   }
// })
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    counter: todosModule
  }
})

export default store
