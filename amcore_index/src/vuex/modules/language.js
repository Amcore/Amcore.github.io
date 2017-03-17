import {
  lan
} from '../types'

const {
  G,
  C,
  E,
  AC,
  AE
} = lan

const language = {
  state: {
    lan: {
      currentLanguage: '中文',
      otherLanguage: 'EN'
    }
  },
  getters: {
    [G]: (state) => state.lan
  },
  mutations: {
    [C](state) {
      console.log(1)
      state.lan = {
        currentLanguage: '中文',
        otherLanguage: 'EN'
      }
    },
    [E](state) {
      console.log(2)
      state.lan = {
        currentLanguage: 'EN',
        otherLanguage: '中文'
      }
    }
  },
  actions: {
    [AC]({commit}) {
      commit(C)
    },
    [AE]({commit}) {
      commit(E)
    }
  }
}

export default language
