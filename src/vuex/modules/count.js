import * as types from '../type'
console.log(types)

const todosModule = {
  state: {
    count: 0
  },

  getters: {
    [types.GET_COUNT]: (state) => {
      return state.count
    }
  },

  actions: {
    [types.FETCH_DECREMENT]: (context) => {
      context.commit(types.DECREMENT)
    },
    [types.FETCH_INCREMENT]: (context) => {
      context.commit(types.INCREMENT)
    }
  },

  mutations: {
    [types.DECREMENT] (state) {
      state.count--
    },
    [types.INCREMENT] (state) {
      state.count++
    }
  }
}

export default todosModule
