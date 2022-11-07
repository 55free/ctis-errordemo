import type { RouteConfigsTable } from "/#/index";
const Layout = () => import("@/layout/index.vue");

const remainingRouter: Array<RouteConfigsTable> = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: "登录",
      showLink: false,
      rank: 101,
    },
  },
  {
    path: "/system",
    name: "system",
    component: Layout,
    redirect: "/system/userAdmin",
    meta: {
      icon: "home-filled",
      title: "系统管理",
      rank: 2,
    },
    children: [
      {
        path: "/system/userAdmin",
        name: "用户管理",
        component: () => import("@/views/system/userAdmin/index.vue"),
        meta: {
          title: "用户管理",
        },
      },
      {
        path: "/system/organizationAdmin",
        name: "组织管理",
        component: () => import("@/views/system/organizationAdmin/index.vue"),
        meta: {
          title: "组织管理",
        },
      },
    ],
  },
  {
    path: "/carManage",
    name: "carManage",
    component: Layout,
    redirect: "/carManage/carTechnology",
    meta: {
      icon: "car-fill",
      title: "车辆管理",
      rank: 3,
    },
    children: [
      {
        path: "/carManage/carTechnology",
        name: "车辆技术档案",
        component: () => import("@/views/carManage/carTechnology/index.vue"),
        meta: {
          title: "车辆技术档案",
        },
      },
      {
        path: "/carManage/carYearlyInspection",
        name: "车辆年检信息",
        component: () =>
          import("@/views/carManage/carYearlyInspection/index.vue"),
        meta: {
          title: "车辆年检信息",
        },
      },
      {
        path: "/carManage/carPermissions",
        name: "车辆权限管理",
        component: () => import("@/views/carManage/carPermissions/index.vue"),
        meta: {
          title: "车辆权限管理",
        },
      },
    ],
  },
  {
    path: "/driverManage",
    name: "driverManage",
    component: Layout,
    redirect: "/driverManage/dirverTechnology",
    meta: {
      icon: "file-fill",
      title: "驾驶员管理",
      rank: 4,
    },
    children: [
      {
        path: "/driverManage/dirverTechnology",
        name: "驾驶员技术安全档案",
        component: () =>
          import("@/views/driverManage/dirverTechnology/index.vue"),
        meta: {
          title: "驾驶员技术安全档案",
        },
      },
    ],
  },
  {
    path: "/vehicleDispatch",
    name: "vehicleDispatch",
    component: Layout,
    redirect: "/vehicleDispatch/carApp",
    meta: {
      icon: "archive-fill",
      title: "车辆调派",
      rank: 5,
    },
    children: [
      {
        path: "/vehicleDispatch/carApp",
        name: "用车申请",
        component: () => import("@/views/vehicleDispatch/carApp/index.vue"),
        meta: {
          title: "用车申请",
        },
      },
      {
        path: "/vehicleDispatch/departmentApproval",
        name: "部门审批",
        component: () =>
          import("@/views/vehicleDispatch/departmentApproval/index.vue"),
        meta: {
          title: "部门审批",
        },
      },
      {
        path: "/vehicleDispatch/receptionApproval",
        name: "汽服中心审批",
        component: () =>
          import("@/views/vehicleDispatch/receptionApproval/index.vue"),
        meta: {
          title: "汽服中心审批",
        },
      },
      {
        path: "/vehicleDispatch/dispatch",
        name: "车辆调度",
        component: () => import("@/views/vehicleDispatch/dispatch/index.vue"),
        meta: {
          title: "车辆调度",
        },
      },
      {
        path: "/vehicleDispatch/returnRegistration",
        name: "回场登记",
        component: () =>
          import("@/views/vehicleDispatch/returnRegistration/index.vue"),
        meta: {
          title: "回场登记",
        },
      },
      {
        path: "/vehicleDispatch/dispatchRecord",
        name: "调派记录",
        component: () =>
          import("@/views/vehicleDispatch/dispatchRecord/index.vue"),
        meta: {
          title: "调派记录",
        },
      },
      {
        path: "/vehicleDispatch/vehicleRunStatus",
        name: "车辆运行动态",
        component: () =>
          import("@/views/vehicleDispatch/vehicleRunStatus/index.vue"),
        meta: {
          title: "车辆运行动态",
        },
      },
    ],
  },
  {
    path: "/redirect",
    component: Layout,
    meta: {
      icon: "home-filled",
      title: "首页",
      showLink: false,
      rank: 104,
    },
    children: [
      {
        path: "/redirect/:path(.*)",
        name: "Redirect",
        component: () => import("@/layout/redirect.vue"),
      },
    ],
  },
];

export default remainingRouter;
