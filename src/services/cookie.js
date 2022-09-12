import Cookie from 'js-cookie';

const TOKEN_API_AUTH = "__token_api_auth";

export default {
    getToken() {
        return Cookie.get(TOKEN_API_AUTH);
    },

    setToken(token) {
        // expira em, como configurado na api
        let exp = new Date(new Date().getTime() + 60 * 60 * 1000);

        Cookie.set(TOKEN_API_AUTH, token, { expires: exp })
    },

    deleteToken() {
        Cookie.remove(TOKEN_API_AUTH);
    }
};