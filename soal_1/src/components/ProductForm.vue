<template>
  <div class="p-6 bg-white shadow-lg rounded-lg max-w-2xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">{{ isEdit ? "Edit Product" : "Add Product" }}</h1>

    <form @submit.prevent="handleSubmit">
      <!-- Product Title -->
      <div class="mb-4">
        <label class="block text-gray-700">Title</label>
        <input v-model="product.title" type="text" class="w-full p-2 border rounded-md" required />
      </div>

      <!-- Price -->
      <div class="mb-4">
        <label class="block text-gray-700">Price ($)</label>
        <input
          v-model="product.price"
          type="number"
          step="0.01"
          class="w-full p-2 border rounded-md"
          required
        />
      </div>

      <!-- Description -->
      <div class="mb-4">
        <label class="block text-gray-700">Description</label>
        <textarea
          v-model="product.description"
          class="w-full p-2 border rounded-md"
          required
        ></textarea>
      </div>

      <!-- Category -->
      <div class="mb-4">
        <label class="block text-gray-700">Category</label>
        <select v-model="product.category" class="w-full p-2 border rounded-md">
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
        </select>
      </div>

      <!-- Image URL -->
      <div class="mb-4">
        <label class="block text-gray-700">Image URL</label>
        <input v-model="product.image" type="url" class="w-full p-2 border rounded-md" required />
      </div>

      <!-- Image Preview -->
      <div v-if="product.image" class="mb-4">
        <img
          :src="product.image"
          :alt="product.title"
          class="w-32 h-32 object-cover rounded-md shadow-md border"
        />
      </div>

      <!-- Submit Button -->
      <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
        {{ isEdit ? "Update Product" : "Add Product" }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

// API Endpoint
const API_URL = "https://fakestoreapi.com/products";

// State
const route = useRoute();
const router = useRouter();
const isEdit = ref(false);
const product = ref({
  title: "",
  price: "",
  description: "",
  category: "men's clothing",
  image: "",
});

// Load product if editing
onMounted(async () => {
  const productId = route.params.id;
  if (productId) {
    isEdit.value = true;
    try {
      const response = await axios.get(`${API_URL}/${productId}`);
      product.value = response.data;
    } catch (error) {
      console.error("Failed to load product", error);
    }
  }
});

// Handle Add / Edit Submission
const handleSubmit = async () => {
  try {
    if (isEdit.value) {
      await axios.put(`${API_URL}/${route.params.id}`, product.value);
      alert("Product updated successfully!");
    } else {
      await axios.post(API_URL, product.value);
      alert("Product added successfully!");
    }
    router.push("/");
  } catch (error) {
    console.error("Error saving product", error);
  }
};
</script>
