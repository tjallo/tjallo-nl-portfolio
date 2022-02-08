import { createRouter, createWebHistory } from "vue-router";
import AboutMe from "@/views/AboutMe.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "aboutme",
      component: AboutMe,
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
