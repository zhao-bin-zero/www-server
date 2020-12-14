import Vue from 'vue';
import VueMate from 'vue-meta';
import { BBadge } from '@node_modules/bootstrap-vue/esm/components/badge/badge';
import { BButton } from '@node_modules/bootstrap-vue/esm/components/button/button';
// import { BButton, BBadge } from 'bootstrap-vue';
import App from './App.vue';
import createRouter from './router';
import createStore from './store';
import createRequest from './request/instance';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import { sync } from 'vuex-router-sync';

Vue.use(VueMate);
Vue.component('b-badge', BBadge);
Vue.component('b-button', BButton);

const createApp = (context) => {
    console.log(context);
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
};

export default createApp;
