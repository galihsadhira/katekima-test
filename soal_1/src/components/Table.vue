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

        <!-- Tambah-->
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
          <th class="border p-3 w-1/2 text-left">Nama</th>
          <th class="border p-3 w-1/4 text-left">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <!-- Loading State  -->
        <template v-if="loading">
          <tr v-for="n in itemsPerPage" :key="n" class="animate-pulse">
            <td class="border p-3 bg-gray-200 h-6 w-10 rounded"></td>
            <td class="border p-3 bg-gray-200 h-6 w-full rounded"></td>
            <td class="border p-3 bg-gray-200 h-6 w-32 rounded"></td>
          </tr>
        </template>

        <!-- Actual Data -->
        <template v-else>
          <tr
            v-for="(product, index) in paginatedItems"
            :key="product.title"
            class="hover:bg-gray-100"
          >
            <td class="border p-3">{{ startIndex + index + 1 }}</td>
            <td class="border p-3">{{ product.title }}</td>
            <td class="border p-3">
              <router-link
                :to="`/edit/${product.id}`"
                class="py-1 px-3 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-blue-700"
              >
                Edit
              </router-link>
              <button
                type="button"
                class="py-1 px-3 text-sm text-white bg-red-600 rounded-lg hover:bg-red-700"
              >
                Hapus
              </button>
            </td>
          </tr>
        </template>
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
import { computed, ref, watchEffect, onMounted, watch } from "vue";

const props = defineProps<{
  items?: {
    id: any;
    title: string;
  }[];
}>();

const loading = ref(true);
const items = computed(() => props.items ?? []);
const searchQuery = ref(localStorage.getItem("searchQuery") || "");

onMounted(() => {
  searchQuery.value = localStorage.getItem("searchQuery") || "";
});

watchEffect(() => {
  localStorage.setItem("searchQuery", searchQuery.value);
});

watchEffect(() => {
  if (items.value.length > 0) {
    setTimeout(() => {
      loading.value = false;
    }, 500);
  }
});

const itemsPerPage = ref(10);
const currentPage = ref(1);

watch(itemsPerPage, (newLimit, oldLimit) => {
  const currentIndex = (currentPage.value - 1) * oldLimit;
  currentPage.value = Math.floor(currentIndex / newLimit) + 1;
});

const filteredItems = computed(() =>
  items.value.filter((product) =>
    product?.title?.toLowerCase()?.includes(searchQuery.value.toLowerCase())
  )
);

const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage.value);
const paginatedItems = computed(() =>
  filteredItems.value.slice(startIndex.value, startIndex.value + itemsPerPage.value)
);

const totalPages = computed(() => Math.ceil(filteredItems.value.length / itemsPerPage.value));

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
