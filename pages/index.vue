<template>
  <div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank"
      >Learn more about Nuxt Routing</a
    >
    <CookieTest />
  </div>
</template>

<script setup lang="ts">
import CookieTest from "@/src/components/CookieTest.vue";
const route = useRoute();
</script>
