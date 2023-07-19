import Vue from "vue";
import axios from "axios";
export default function ({
  $axios,
  redirect,
  $auth,
  $toast,
  app,
  store,
  $nuxt,
}) {
  $axios.onRequest((config) => {
    if (process.browser === true) {
      console.log("testtt", config);
      if (localStorage.getItem("auth._token.local")) {
        config.headers.Authorization =
          localStorage.getItem("auth._token.local");
      }
    }

    return config;
  });
  $axios.onResponse((response) => {
    return response;
  });

  $axios.onError((error) => {});
  $axios.onResponse((response) => {});
}
Vue.use(axios);
