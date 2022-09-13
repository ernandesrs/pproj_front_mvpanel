import axios from "axios";
import Cookie from '@/services/cookie';

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1";
axios.defaults.headers.common['Content-Type'] = 'application/json,multipart/form-data';
axios.defaults.headers.common['Accept'] = 'application/json,multipart/form-data';

axios.interceptors.request.use(function (config) {
    const token = Cookie.getToken();

    if (token) {
        config.headers.common['Authorization'] = token;
    }

    return config;
});

export default { axios };