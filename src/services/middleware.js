import Cookie from "./cookie";
import axios from "./axios";
import store from "@/store";

export default {
    async redirectIfUnnauthenticated(to, from, next) {
        let authToken = Cookie.getToken();
        let route;

        if (!authToken)
            route = { name: "auth.login" };

        // check/validate token
        await axios.axios.get("/me").then((response) => {
            if (!store?.state?.user?.id)
                store.commit("storeUser", response.data.data);
        }).catch(() => {
            Cookie.deleteToken();
            route = { name: "auth.login" };
        });

        next(route);
    },

    redirectIfAuthenticated(to, from, next) {
        let authToken = Cookie.getToken();
        let route;

        if (authToken)
            route = { name: "panel.index" };

        next(route);
    },
};