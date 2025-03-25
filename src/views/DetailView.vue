<template>
    <div class="p-6">
      <h1 class="text-2xl mb-4">Berry Detail: {{ berryName }}</h1>
      <p>More details will be displayed here.</p>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from "vue-router";
  const route = useRoute();
  const berryName = route.params.id;
  </script>
  