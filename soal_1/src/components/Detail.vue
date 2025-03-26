<template>
  <div v-if="loading" role="status" class="p-6 border rounded-lg shadow-md bg-white animate-pulse">
    <div class="flex flex-col md:flex-row gap-6">
      <!-- Loading Placeholder for Image -->
      <div class="flex-shrink-0 w-48 h-48 bg-gray-300 rounded-lg"></div>

      <!-- Loading Placeholder for Text -->
      <div class="flex-1 space-y-3">
        <div class="h-4 bg-gray-200 rounded w-3/4"></div>
        <div class="h-3 bg-gray-200 rounded w-1/2"></div>
        <div class="h-3 bg-gray-200 rounded w-2/3"></div>
        <div class="h-3 bg-gray-200 rounded w-3/4"></div>
        <div class="h-3 bg-gray-200 rounded w-1/3"></div>
      </div>
    </div>
    <span class="sr-only">Loading...</span>
  </div>

  <div v-else class="p-6 border rounded-lg shadow-md bg-white flex flex-col md:flex-row gap-6">
    <!-- Product Image -->
    <div class="flex-shrink-0">
      <img
        :src="product.image"
        :alt="product.title"
        class="w-48 h-48 object-cover rounded-lg shadow-md border"
      />
    </div>

    <!-- Product Details -->
    <div class="flex-1">
      <h2 class="text-xl font-bold mb-4">Product Details</h2>
      <p><strong>Name:</strong> {{ product.title }}</p>
      <p><strong>Price:</strong> ${{ product.price }}</p>
      <p><strong>Category:</strong> {{ product.category }}</p>
      <p><strong>Description:</strong> {{ product.description }}</p>

      <!-- Product Rating -->
      <p class="mt-4 text-sm text-gray-600">
        <strong>Rating:</strong> {{ product.rating?.rate }} ⭐ ({{ product.rating?.count }} reviews)
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

// Loading state
const loading = ref(true);

// Simulate API loading
watchEffect(() => {
  if (props.product && Object.keys(props.product).length > 0) {
    setTimeout(() => {
      loading.value = false;
    }, 500);
  }
});
</script>
