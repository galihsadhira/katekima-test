<template>
  <aside
    id="default-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <!-- Logo -->
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <!-- Navigation List -->
      <ul class="space-y-2 font-medium">
        <!-- List -->
        <li>
          <RouterLink
            to="/"
            class="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
            :class="{ 'bg-gray-700': isListActive && !isDetailActive }"
          >
            <svg class="w-6 h-6 text-white" aria-hidden="true" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                stroke-width="2"
                d="M3 11h18M3 15h18m-9-4v8m-8 0h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
              />
            </svg>
            <span class="flex-1 ms-3 whitespace-nowrap text-white">List</span>
          </RouterLink>
        </li>

        <!-- Detail  -->
        <li>
          <RouterLink
            to="/detail"
            class="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
            :class="{ 'bg-gray-700': isDetailActive && !isListActive }"
          >
            <svg class="w-6 h-6 text-white" aria-hidden="true" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"
              />
            </svg>
            <span class="flex-1 ms-3 whitespace-nowrap text-white">Detail</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const isListActive = computed(
  () => route.path === "/" || route.path.startsWith("/add") || route.path.startsWith("/edit")
);

const isDetailActive = computed(() => route.path === "/detail");
</script>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
