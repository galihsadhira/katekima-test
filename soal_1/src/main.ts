import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import '@/styles/main.css';
import 'flowbite';

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app');
