<template>
  <div class="overflow-x-auto bg-white shadow-lg rounded-lg p-4">
    <!-- Controls: Search, Items Per Page, & Add Button -->
    <div class="mb-3 flex justify-between items-center">
      <!-- Search Bar -->
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search..."
        class="border p-2 rounded-md w-1/3"
      />

      <div class="flex items-center space-x-4">
        <!-- Items Per Page Selector -->
        <div class="flex items-center">
          <label class="text-sm font-medium mr-2">Show:</label>
          <select v-model="itemsPerPage" class="border p-2 rounded-md">
            <option v-for="limit in [10, 30, 50]" :key="limit" :value="limit">
              {{ limit }}
            </option>
          </select>
        </div>

        <!-- "Tambah" Button -->
        <router-link
          to="/add"
          class="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700"
        >
          Tambah
        </router-link>
      </div>
    </div>

    <!-- Table -->
    <table class="w-full border border-gray-300 rounded-lg">
      <thead class="bg-blue-600 text-white">
        <tr>
          <th class="border p-3 w-1/6 text-left">No</th>
          <th class="border p-3 w-1/2 text-left">Name</th>
          <th class="border p-3 w-1/4 text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(berry, index) in paginatedItems" :key="berry.name" class="hover:bg-gray-100">
          <td class="border p-3">{{ startIndex + index + 1 }}</td>
          <td class="border p-3">{{ berry.name }}</td>
          <td class="border p-3">
            <button
              type="button"
              class="py-1 px-3 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-blue-700"
            >
              Edit
            </button>
            <button
              type="button"
              class="py-1 px-3 text-sm text-white bg-red-600 rounded-lg hover:bg-red-700"
            >
              Hapus
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination Controls -->
    <div class="mt-4 flex justify-between items-center">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="px-4 py-2 border rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
      >
        Previous
      </button>
      <span class="text-sm">Page {{ currentPage }} of {{ totalPages }}</span>
      <button
        @click="nextPage"
        :disabled="currentPage >= totalPages"
        class="px-4 py-2 border rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

// Props: List of items (berries)
const props = defineProps<{
  items: { name: string }[];
}>();

// Search state
const searchQuery = ref("");

// Pagination state
const itemsPerPage = ref(10); // ✅ Default limit
const currentPage = ref(1);

// Filtered items based on search query
const filteredItems = computed(() =>
  props.items.filter((berry) => berry.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
);

// Calculate paginated items
const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage.value);
const paginatedItems = computed(() =>
  filteredItems.value.slice(startIndex.value, startIndex.value + itemsPerPage.value)
);

// Calculate total pages
const totalPages = computed(() => Math.ceil(filteredItems.value.length / itemsPerPage.value));

// Functions for pagination
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};
</script>
