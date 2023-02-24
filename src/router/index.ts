import Vue from "vue";
import Router from "vue-router";

const routes: Array<any> = [
  {
    path: "/",
    name: "首页",
    redirect: "/login",
    meta: {
      hidden: true,
    },
  },
  {
    path: "/login",
    name: "登录",
    component: () => import("@/view/login/Login.vue"),
    meta: {
      hidden: true,
    },
  },
  {
    path: "/home",
    name: "学生管理",
    redirect: "/home/student",
    component: () => import("@/components/layout/Home.vue"),
    meta: {
      iconClass: "fa fa-bar-chart",
    },
    children: [
      {
        path: "/home/student",
        name: "学生列表",
        component: () => import("@/view/students/StudentList.vue"),
        meta: {
          iconClass: "fa fa-list",
        },
      },
      {
        path: "/home/info",
        name: "信息列表",
        component: () => import("@/view/students/InfoList.vue"),
        meta: {
          iconClass: "fa fa-list-alt",
        },
      },
      {
        path: "/home/infoManage",
        name: "信息管理",
        component: () => import("@/view/students/InfoManage.vue"),
        meta: {
          iconClass: "fa fa-list-alt",
        },
      },
      {
        path: "/home/work",
        name: "作业列表",
        component: () => import("@/view/students/WorkList.vue"),
        meta: {
          iconClass: "fa fa-list-ul",
        },
      },
      {
        path: "/home/workMange",
        name: "作业管理",
        component: () => import("@/view/students/WorkManage.vue"),
        meta: {
          iconClass: "fa fa-th-list",
        },
      },
    ],
  },
  {
    path: "/data",
    name: "数据分析",
    component: () => import("@/components/layout/Home.vue"),
    meta: {
      iconClass: "fa fa-line-chart",
    },
    children: [
      {
        path: "/data/dataView",
        name: "数据概览",
        component: () => import("@/view/dataAnalysis/DataView.vue"),
        meta: {
          iconClass: "fa fa-line-chart",
        },
      },
      {
        path: "/data/mapView",
        name: "地图概览",
        component: () => import("@/view/dataAnalysis/MapView.vue"),
        meta: {
          iconClass: "fa fa-line-chart",
        },
      },
      {
        path: "/data/TravelMap",
        name: "旅游地图",
        component: () => import("@/view/dataAnalysis/TravelMap.vue"),
        meta: {
          iconClass: "fa fa-line-chart",
        },
      },
      {
        path: "/data/ScoreMap",
        name: "分数地图",
        component: () => import("@/view/dataAnalysis/ScoreMap.vue"),
        meta: {
          iconClass: "fa fa-line-chart",
        },
      },
    ],
  },
  {
    path: "/users",
    name: "用户中心",
    component: () => import("@/components/layout/Home.vue"),
    meta: {
      iconClass: "fa fa-users",
    },
    children: [
      {
        path: "/users/users",
        name: "用户管理",
        component: () => import("@/view/users/User.vue"),
        meta: {
          iconClass: "fa fa-users",
        },
      },
    ],
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/components/error/404.vue"),
    meta: {
      hidden: true,
    },
  },
  {
    path: "/401",
    name: "401",
    component: () => import("@/components/error/401.vue"),
    meta: {
      hidden: true,
    },
  },
];

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
