import Vue from 'vue';
import VueMate from 'vue-meta';
import './bootstrap-vue';
import App from './App.vue';
import createRouter from './router';
import createStore from './store';
import createRequest from './request/instance';

import { sync } from 'vuex-router-sync';

Vue.use(VueMate);

const createApp = (context) => {
    // console.log(context);
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
