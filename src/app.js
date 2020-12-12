import Vue from "vue";
import VueMate from "vue-meta";
import { BootstrapVueIcons } from 'bootstrap-vue'
import App from "./App.vue";
import createRouter from "./router";
import createStore from "./store";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { sync } from "vuex-router-sync";

Vue.use(VueMate);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

const createApp = (context) => {
  console.log(context)
  const router = createRouter();
  const store = createStore();

  sync(store, router);

  const app = new Vue({
    router,
    store,
    render: (h) => h(App),
  });
  return { app, router, store };
}

export default createApp