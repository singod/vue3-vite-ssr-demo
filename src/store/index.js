import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      count: 123
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store;
