import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/layout" },
    { path: "/layout", component: () => import("../layout/index.vue") },
  ],
});

export default router;
