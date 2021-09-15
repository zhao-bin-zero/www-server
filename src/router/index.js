import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/**
 * 提供一个工厂函数，创建一个路由对象
 */
var h5 =true;
const createRouter = () => {
    return new Router({
        mode: 'history',
        base:'/a/',
        routes: [
          {
            path: "",
            component: () => import("@/views"),
            children: [
              // { path: "", component: () => h5 ? import("@/views/Home.vue") : import("@/views/Home2.vue")},
              { path: "", component: () => import("@/views/Home.vue") },
              { path: "home2", component: () => import("@/views/Home2.vue") },
              { path: "item/:id", component: () => import("@/views/Item.vue") },
            ],
          },
        ],
    });
};
export default createRouter