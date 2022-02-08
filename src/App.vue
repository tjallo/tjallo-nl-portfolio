<template>
  <!-- <div class="wrapper"> -->
  <!-- <h1 class="text-2xl font-bold underline">Hello world!</h1> -->

  <Navbar />

  <!-- <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
  </div>
  -->
  <RouterView />
</template>

<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
</script>

<style>
</style>
