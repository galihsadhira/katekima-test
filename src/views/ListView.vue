<template>
    <div class="p-6">
      <h1 class="text-2xl font-bold">Berry List</h1>
      <table class="w-full border border-gray-300">
        <thead class="bg-gray-200">
          <tr>
            <th class="border p-2">No</th>
            <th class="border p-2">Name</th>
            <th class="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(berry, index) in berryStore.berries" :key="berry.name">
            <td class="border p-2">{{ index + 1 }}</td>
            <td class="border p-2">{{ berry.name }}</td>
            <td class="border p-2">
              <router-link :to="'/detail/' + berry.name" class="text-blue-500">Detail</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from "vue";
  import { useBerryStore } from "@/stores/berryStore";
  
  const berryStore = useBerryStore();
  onMounted(() => {
    berryStore.loadBerries();
  });

  console.log(berryStore.berries, "=== berries");
  
  </script>
  