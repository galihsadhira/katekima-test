<template>
  <div class="p-6">
    <!-- Search & Pagination Controls -->
    <div class="flex justify-between items-center mb-4">
      <input v-model="searchQuery" placeholder="Search..." class="border p-2 rounded-md w-1/3" />
      <select v-model="itemsPerPage" class="border p-2 w-1/6 rounded-md">
        <option v-for="limit in [10, 30, 50]" :key="limit" :value="limit">{{ limit }}</option>
      </select>
    </div>

    <!-- Table -->
    <table class="w-full border border-gray-300">
      <thead class="bg-yellow-400 text-black">
        <tr>
          <th class="border p-2">No</th>
          <th class="border p-2">Nama</th>
          <th class="border p-2">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(berry, index) in paginatedItems" :key="berry.name" class="hover:bg-gray-100">
          <td class="border p-2">{{ startIndex + index + 1 }}</td>
          <td class="border p-2">{{ berry.name }}</td>
          <td class="border p-2">
            <button
              type="button"
              class="py-1 px-3 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-blue-700"
            >
              <router-link :to="'/detail/' + berry.name" class="text-purple-500"
                >Detail</router-link
              >
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

<style scoped>
/* Set Sidebar Background to Yellow */
.bg-yellow-400 {
  background-color: #ffce1b !important;
}

/* Hover Effect */
.hover\:bg-yellow-500:hover {
  background-color: #e6b800 !important;
}
</style>
