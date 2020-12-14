import Vue from "vue";
import VueMate from "vue-meta";
import ElementUI from 'element-ui'
import App from "./App.vue";
import createRouter from "./router";
import createStore from "./store";
import createRequest from "./request/instance";
import 'element-ui/lib/theme-chalk/index.css'

import { sync } from "vuex-router-sync";

Vue.use(VueMate);
Vue.use(ElementUI, { size: 'small' })

const createApp = (context) => {
  console.log(context)
  const router = createRouter();
  const store = createStore();
  const request = createRequest();

  sync(store, router);

  const app = new Vue({
    router,
    store,
    request,
    render: (h) => h(App),
  });
  return { app, router, store, request };
}

export default createApp