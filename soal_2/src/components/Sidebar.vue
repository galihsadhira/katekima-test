<template>
  <aside
    id="default-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-yellow-400 dark:bg-yellow-600"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <ul class="space-y-2 font-medium">
        <!-- List  -->
        <li>
          <RouterLink
            to="/"
            class="flex items-center p-2 text-white rounded-lg hover:bg-yellow-300 dark:hover:bg-yellow-500 group"
            :class="{
              'bg-yellow-500 dark:bg-yellow-700': isActiveRoute('/') || isActiveRoute('/detail'),
            }"
          >
            <svg
              class="w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-width="2"
                d="M3 11h18M3 15h18m-9-4v8m-8 0h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
              />
            </svg>
            <span class="flex-1 ms-3 whitespace-nowrap">List</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";

// Detect Active Routes
const route = useRoute();
const isActiveRoute = (path: string) => route.path.startsWith(path);
</script>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
