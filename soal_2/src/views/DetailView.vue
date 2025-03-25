<template>
  <div class="p-6">
    <button
      @click="$router.push('/')"
      class="mb-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md"
    >
      ← Back to List
    </button>

    <h1 class="text-2xl mb-4">Berry Detail: {{ berryName }}</h1>
    <div v-if="berry" class="p-4 border rounded-lg shadow-md bg-white">
      <h2 class="text-xl font-bold mb-2">Berry Details</h2>
      <p><strong>Name:</strong> {{ berry.name }}</p>
      <p><strong>Size:</strong> {{ berry.size }}</p>
      <p><strong>Firmness:</strong> {{ berry.firmness.name }}</p>
      <p><strong>Growth Time:</strong> {{ berry.growth_time }} hours</p>
    </div>
    <div v-else class="p-4 text-gray-500">Loading berry details...</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { fetchBerryDetail } from "@/api/berry";

const route = useRoute();
const berryName = route.params.id;
const berry = ref(null);
const router = useRouter();

onMounted(async () => {
  try {
    berry.value = await fetchBerryDetail(`https://pokeapi.co/api/v2/berry/${berryName}/`);
  } catch (error) {
    console.error("Error fetching berry details:", error);
  }
});
</script>
