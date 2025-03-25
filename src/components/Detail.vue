<template>
  <div class="p-4 border rounded-lg shadow-md bg-white">
    <h2 class="text-xl font-bold mb-2">Berry Details</h2>
    <p><strong>Name:</strong> {{ berry.name }}</p>
    <p><strong>Size:</strong> {{ berry.size }}</p>
    <p><strong>Firmness:</strong> {{ berry.firmness.name }}</p>
    <p><strong>Growth Time:</strong> {{ berry.growth_time }} hours</p>
  </div>
</template>

<script setup>
defineProps({
  berry: Object,
});
</script>
