import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", component: () => import("../views/Login/index.vue") },
    { path: "/layout", name: "layout", component: () => import("../layout/index.vue") },
  ],
});

export default router;
