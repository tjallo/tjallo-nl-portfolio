<template>
  <header className="bg-gray-800 md:sticky top-0 z-10">
    <div
      className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
      <a className="font-medium text-white mb-4 md:mb-0">
        <router-link to="/" className="ml-3 text-xl">
          Tjalle Wolterink
        </router-link>
      </a>
      <nav className="navbar">
        <router-link
          class="mr-5"
          :to="link.href"
          v-for="link in routerLinks"
          :key="link.name"
          >{{ link.name }}</router-link
        >
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

// Add Links you want to display in Navbar here
const routerLinks = [
  { name: "About me", href: "/" },
  { name: "Skills", href: "/skills" },
  { name: "Education", href: "/education" },
  { name: "Experience", href: "/experience" },
];
</script>

<style>
.list-btn {
  @apply block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0  md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700;
}

.navbar {
  @apply md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center;
}
</style>