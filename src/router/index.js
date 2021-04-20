import { createWebHistory, createRouter } from "vue-router";
import DebitView from "@/views/DebitView.vue";
import HomeView from "@/views/HomeView";
import NotFound from "@/views/NotFound";

const routes = [
  {
    path: "/DebitView",
    name: "DebitView",
    component: DebitView,
  },
  {
    path: "/",
    name: "HomeView",
    component: HomeView
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
