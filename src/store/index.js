import { createStore } from "vuex";

export default createStore({
  state: {
    user: {}
  },
  getters: {
  },
  mutations: {
    storeUser(state, user) {
      state.user = user;
    }
  },
  actions: {
  },
  modules: {
  }
})
