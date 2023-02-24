import Vue from "vue";
import App from "./App.vue";
// 引入 vue-router
import router from "@/router";
// 路由守卫
router.beforeEach((to, from, next) => {
  if (!localStorage.getItem("username")) {
    if (to.path !== "/login") {
      next("/login");
    }
  }
  next();
});
// 引入图标库
import "font-awesome/css/font-awesome.min.css";
// 全局引入
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 引入 echarts
import echarts from "echarts";
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
