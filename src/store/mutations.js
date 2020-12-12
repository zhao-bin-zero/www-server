// import { replaceAfterNum, extend, zeroToFixed } from "@/common/utils";
import Vue from 'vue';
const mutations = {
  setItem(state, { id, item }) {
    // state.items[id] = item;
    Vue.set(state.items, id, item);
  },
  setList(state, list) {
    state.list = list;
  },
};

export default mutations;
