<template>
  <div class="container px-5 py-10 mx-auto">
    <div class="text-center mb-20">
      <BriefcaseIcon class="w-10 inline-block mb-4" />
      <h1 class="sm:text-4xl text-3xl mb-2">Experience</h1>
      <p class="mx-auto">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit ipsa
        delectus eum quo voluptas aspernatur accusantium distinctio possimus
        est.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BriefcaseIcon } from "@heroicons/vue/outline"
</script>

<style>
h1 {
  @apply font-medium text-white;
}

p {
  @apply text-base leading-relaxed xl:w-2/4 lg:w-3/4;
}
</style>
