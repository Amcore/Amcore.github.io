import {
  lan
} from '../types'

const {
  GCN,
  GEN,
  MCN,
  MEN,
  ACN,
  AEN
} = lan

const language = {
  state: {
    currentLanguage: '中文',
    otherLanguage: 'EN'
  },
  getters: {
    [GCN]: (state) => state.currentLanguage,
    [GEN]: (state) => state.otherLanguage
  },
  mutations: {
    [MCN] (state) {
      state.currentLanguage = '中文'
      state.otherLanguage = 'EN'
    },
    [MEN] (state) {
      state.currentLanguage = 'EN'
      state.otherLanguage = '中文'
    }
  },
  actions: {
    [ACN]({ commit }) {
      commit(MCN)
    },
    [AEN]({ commit }) {
      commit(MEN)
    }
  }
}

export default language

// import {
//   count
// } from '../types'
//
// const {
//   G,
//   F,
//   M,
//   T,
//   A,
//   N
// } = count
//
// const counter = {
//   state: {
//     count: 'en',
//     ad: 'cn'
//   },
//   getters: {
//     [G]: (state) => state.count,
//     [N]: (state) => state.ad
//   },
//   mutations: {
//     [M] (state) {
//       state.count = 'cn'
//       state.ad = 'en'
//     },
//     [T] (state) {
//       state.count = 'en'
//       state.ad = 'cn'
//     }
//   },
//   actions: {
//     [F]({ commit }) {
//       commit(M)
//     },
//     [A]({ commit }) {
//       commit(T)
//     }
//   }
// }
//
// export default counter
