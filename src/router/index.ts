import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/skills",
      name: "skills",
      component: () => import("@/views/Skills.vue"),
    },
    {
      path: "/education",
      name: "education",
      component: () => import("@/views/Education.vue"),
    },
    {
      path: "/experience",
      name: "experience",
      component: () => import("@/views/Experience.vue"),
    },
  ],
});

export default router;
