import {
  lan
} from '../types'

const {
  GC,
  GE,
  CN,
  EN,
  AC,
  AE
} = lan

const language = {
  state: {
    currentLanguage: '中文',
    otherLanguage: 'EN'
  },
  getters: {
    [GC]: (state) => state.currentLanguage,
    [GE]: (state) => state.otherLanguage
  },
  mutations: {
    [CN](state) {
      console.log(1)
      state.currentLanguage = '中文'
      state.otherLanguage = 'EN'
    },
    [EN](state) {
      console.log(2)
      state.currentLanguage = 'EN'
      state.otherLanguage = '中文'
    }
  },
  actions: {
    [AC]({commit}) {
      commit(CN)
    },
    [AE]({commit}) {
      commit(EN)
    }
  }
}

export default language
