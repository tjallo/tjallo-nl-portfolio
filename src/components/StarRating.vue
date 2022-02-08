<template>
    <div>
        <ul class="flex items-center">
            <li v-for="index in (Number.parseInt(given))" :key="index">
                <StarIcon class="yellow-star"></StarIcon>
            </li>
            <li v-for="index in (Number.parseInt(total) - Number.parseInt(given))" :key="index">
                <StarIcon class="grey-star"></StarIcon>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">

import { StarIcon } from "@heroicons/vue/solid"


const props = defineProps({
    given: String,
    total: String
})


</script>

<style>
.yellow-star {
    @apply w-6 h-6 text-yellow-300 -m-0.5;
}
.grey-star {
    @apply w-6 h-6 text-gray-700 -m-0.5;
}
</style>