<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Select a Product</h1>

    <!-- Product Selection -->
    <div class="flex items-center gap-4 mb-6">
      <select v-model="selectedProductUrl" class="border p-2 rounded-md w-1/3">
        <option disabled value="">Select a product</option>
        <option v-for="product in productStore.products" :key="product.title" :value="product.id">
          {{ product.title }}
        </option>
      </select>

      <button
        @click="changeProduct"
        class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Pindah
      </button>
    </div>

    <!-- Product Details -->
    <div v-if="!isLoading && productStore.productDetail" class="mt-6">
      <Detail :product="productStore.productDetail" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useProductStore } from "@/stores/productStore";
import Detail from "@/components/Detail.vue";

const productStore = useProductStore();
const isLoading = ref(false);

onMounted(() => {
  productStore.loadProducts();
});

// Selected product ID
const selectedProductUrl = ref("");

// Function to fetch and display details
const changeProduct = async () => {
  if (selectedProductUrl.value) {
    isLoading.value = true; // ✅ Show loading
    await productStore.loadProductDetail(selectedProductUrl.value);
    isLoading.value = false;
  }
};
</script>
