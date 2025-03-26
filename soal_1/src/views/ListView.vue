<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold text-gray-800">List</h1>
    <Table :items="productStore.products" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useProductStore } from "@/stores/productStore";
import Table from "@/components/Table.vue";

const productStore = useProductStore();

onMounted(() => {
  productStore.loadProducts();
});
</script>
