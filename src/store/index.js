import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
  },
  getters: {
  },
  mutations: {
    storeUser(state, data) {
      state.user = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
