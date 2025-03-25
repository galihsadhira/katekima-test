<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Select a Berry</h1>

    <!-- Dropdown for selecting a berry -->
    <select v-model="selectedBerryUrl" class="border p-2 rounded-md">
      <option disabled value="">Select a berry</option>
      <option v-for="berry in berryStore.berries" :key="berry.name" :value="berry.url">
        {{ berry.name }}
      </option>
    </select>

    <!-- Replace Button -->
    <button
      @click="replaceBerry"
      class="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    >
      Replace
    </button>

    <!-- Show Berry Details -->
    <Detail v-if="berryStore.berryDetail" :berry="berryStore.berryDetail" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useBerryStore } from "@/stores/berryStore";
import Detail from "@/components/Detail.vue"; // ✅ Berry Detail Component

// Use the Pinia store
const berryStore = useBerryStore();

onMounted(() => {
  berryStore.loadBerries(); // ✅ Load berries from API
});

// Selected berry URL
const selectedBerryUrl = ref("");

// Function to fetch and display details
const replaceBerry = () => {
  if (selectedBerryUrl.value) {
    berryStore.loadBerryDetail(selectedBerryUrl.value);
  }
};
</script>
