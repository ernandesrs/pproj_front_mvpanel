import Axios from "axios";
import Vue from "vue";
import Cookie from "@/cookie";

Axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1";
Axios.defaults.headers.common["Content-Type"] = "application/json";
Axios.defaults.headers.common["Accept"] = "application/json";

Axios.interceptors.request.use(function (config) {
    const authToken = Cookie.getToken();

    if (authToken) config.headers.common["Authorization"] = authToken;

    return config;
});

Vue.prototype.$axios = Axios;