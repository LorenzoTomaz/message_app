import { createRouter, createWebHistory } from "vue-router";

import Data from "../views/Data.vue";
import Portfolio from "../views/Portfolio.vue";
import Chat from "../views/Chat.vue";
const routerHistory = createWebHistory();
const routes = [
  { path: "/", component: Portfolio },
  { path: "/chat", component: Chat },
  { path: "/portfolio", component: Portfolio },
  { path: "/data", component: Data },
];

const router = createRouter({
  history: routerHistory,
  routes,
});

export default router;
