import {
  count
} from '../types'

const {
  G,
  F,
  M,
  T,
  A,
  N
} = count

const counter = {
  state: {
    count: 'en',
    ad: 'cn'
  },
  getters: {
    [G]: (state) => state.count,
    [N]: (state) => state.ad
  },
  mutations: {
    [M] (state) {
      state.count = 'cn'
      state.ad = 'en'
    },
    [T] (state) {
      state.count = 'en'
      state.ad = 'cn'
    }
  },
  actions: {
    [F]({ commit }) {
      commit(M)
    },
    [A]({ commit }) {
      commit(T)
    }
  }
}

export default counter
