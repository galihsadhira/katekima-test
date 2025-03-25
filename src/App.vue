<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <button
    data-drawer-target="default-sidebar"
    data-drawer-toggle="default-sidebar"
    aria-controls="default-sidebar"
    type="button"
    class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  >
    <span class="sr-only">Open sidebar</span>
    <svg
      class="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        fill-rule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
      ></path>
    </svg>
  </button>

  <aside
    id="default-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <ul class="space-y-2 font-medium">
        <!-- List -->
        <li>
          <RouterLink
            to="/"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
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

        <!-- Detail -->
        <li>
          <RouterLink
            to="/detail"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M15.0524 2.01283c-.2634-.00221-.7706-.00646-1.3064.08808-.6053.10681-1.377.35866-1.975.99279-.557.59067-.8308 1.31504-.9706 1.92248-.1413.61388-.1628 1.1828-.1628 1.5327v1h1c.0429 0 .0873.00018.1333.00036.8172.00329 2.1026.00847 3.2375-.9589.7023-.59862.9572-1.43277 1.059-2.06861.0871-.54385.0798-1.08153.0758-1.37798-.0007-.051-.0013-.09486-.0013-.13038v-1h-1c-.0255 0-.0554-.00025-.0895-.00054Zm-3.0525 7.02912c-.2934 0-.3974-.0566-.7263-.23555-.1027-.05589-.2273-.12372-.3865-.20548-.6797-.34907-1.55211-.64467-3.12486-.59552-1.30968.04093-2.37715.88151-3.01521 2.0359-.64078 1.1594-.90215 2.7005-.65499 4.4145.1543 1.07.66239 2.84 1.39644 4.358.36735.7596.81762 1.5119 1.34963 2.0895C7.35502 21.4646 8.08053 22 8.99163 22c1.17857 0 1.86287-.2589 2.38977-.5504.1663-.092.2761-.1558.3523-.2001.1161-.0674.1542-.0895.1949-.0968.0198-.0035.0403-.0035.0708-.0035.0105 0 .0195-.0003.0268-.0005.0132-.0003.0222-.0006.031.0009.0193.0032.0373.0146.095.0514.0638.0408.1761.1125.3925.2382.5319.3091 1.2263.5608 2.4635.5608.9293 0 1.6712-.5145 2.2105-1.0909.5456-.5832.9936-1.3421 1.3526-2.1048.7186-1.5268 1.1845-3.2947 1.3365-4.3485.2471-1.714-.0142-3.2551-.655-4.4145-.6381-1.15439-1.7055-1.99497-3.0152-2.0359-1.5728-.04915-2.4451.24645-3.1248.59552-.1592.08176-.2839.14959-.3866.20548-.3289.17895-.4329.23555-.7263.23555Z"
              />
            </svg>
            <span class="flex-1 ms-3 text-left whitespace-nowrap">Detail</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </aside>

  <div class="p-4 sm:ml-64">
    <RouterView />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
