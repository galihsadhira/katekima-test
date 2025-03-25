<template>
  <div class="overflow-x-auto bg-white shadow-lg rounded-lg p-4">
    <table class="w-full border border-gray-300 rounded-lg">
      <thead class="bg-blue-600 text-white">
        <tr>
          <th class="border p-3 w-1/6 text-left">No</th>
          <th class="border p-3 w-1/2 text-left">Name</th>
          <th class="border p-3 w-1/4 text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(berry, index) in items" :key="berry.name" class="hover:bg-gray-100">
          <td class="border p-3">{{ index + 1 }}</td>
          <td class="border p-3">{{ berry.name }}</td>
          <!-- <td class="border p-3">
              <router-link :to="'/d' + berry.name" class="text-blue-500 hover:underline">Edit</router-link>
            </td> -->
          <td class="border p-3">
            <button
              type="button"
              class="py-2.5 px-3 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Edit
            </button>
            <button
              type="button"
              class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Hapus
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  items: { name: string }[];
}>();
</script>
