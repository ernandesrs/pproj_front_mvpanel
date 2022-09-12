import Cookie from "./cookie";

export default {
    redirectIfUnnauthenticated(to, from, next) {
        let authToken = Cookie.getToken();
        let route;

        if (!authToken)
            route = { name: "auth.login" };

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