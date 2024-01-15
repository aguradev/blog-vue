import aboutRouter from "./web/about-router.js";
import homeRouter from "./web/home-router.js";
import learnvueRouter from "./web/learnvue-router.js";
import { createWebHistory, createRouter } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [homeRouter, aboutRouter, learnvueRouter],
  linkActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  window.document.title =
    to.meta && to.meta.title ? to.meta.title : "Not found";
  next();
});

export default router;
