import { createRouter, createWebHistory } from "vue-router";
import ListView from "@/views/ListView.vue";
import DetailView from "@/views/DetailView.vue";
import AddProductView from "@/views/AddProductView.vue";
import EditProductView from "@/views/EditProductView.vue";

const routes = [
  { path: "/", component: ListView },
  { path: "/detail", component: DetailView }, // ✅ Dynamic Route
  { path: "/add", component: AddProductView },
  { path: "/edit/:id", component: EditProductView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
