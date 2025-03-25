<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold text-gray-800">List</h1>
    <Table :items="berryStore.berries" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useBerryStore } from "@/stores/berryStore";
import Table from "@/components/Table.vue";

const berryStore = useBerryStore();

onMounted(() => {
  berryStore.loadBerries();
});
</script>
