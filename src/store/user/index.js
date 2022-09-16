export default {
    namespaced: true,

    state: () => ({
        authUser: null
    }),

    mutations: {
        storeAuthUser(state, user) {
            state.authUser = user;
        }
    },

    actions: {
    },

    getters: {
    }
}