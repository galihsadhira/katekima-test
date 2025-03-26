import { defineStore } from "pinia";
import { ref } from "vue";
import { fetchProducts, fetchProductDetail } from "@/api/products";

export const useProductStore = defineStore("productStore", () => {
  const products = ref<
    { id: number; title: string; price: number; category: string; image: string }[]
  >([]);
  const productDetail = ref(null);

  const loadProducts = async () => {
    products.value = await fetchProducts();
  };

  const loadProductDetail = async (productId: number) => {
    productDetail.value = await fetchProductDetail(productId);
  };

  return { products, productDetail, loadProducts, loadProductDetail };
});
