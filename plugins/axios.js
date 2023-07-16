
import Vue from 'vue';
import axios from 'axios';
export default function ({ $axios, redirect, $auth, $toast, app, store, $nuxt }) {
    $axios.onRequest(config => {
        // config.headers.Localization = app.i18n.locale

    })
  $axios.onResponse(response => {

  })
    $axios.onError(error => {

    })
    $axios.onResponse((response) => {
    })
}
Vue.use(axios);
