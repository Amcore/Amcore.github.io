import Vue from 'vue'
import Vuex from 'vuex'

import language from './modules/language'
import counter from './modules/counter'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    language: language,
    counter: counter
  }
})

export default store
