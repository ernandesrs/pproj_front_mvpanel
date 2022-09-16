import { createStore } from "vuex";
import user_module from "@/store/user";

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
		user_module
	}
})
