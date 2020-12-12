import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import * as getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
// import createLogger from "vuex/dist/logger";

Vue.use(Vuex);

// 上线时删除
// const debug = process.env.NODE_ENV !== "production";

const createStore = (request) => {
  return new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    // strict: debug,
    // plugins: debug ? [createLogger()] : []
  });
}

export default createStore;
