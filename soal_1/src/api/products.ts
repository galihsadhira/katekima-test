import axios from "axios";
import type { Pagination } from "@/@types/types.t";

const API_URL = "https://fakestoreapi.com/products";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};

export const fetchProductDetail = async (productId: number) => {
  try {
    const response = await axios.get(`${API_URL}/${productId}`);
    return response.data; // Returns product details
  } catch (error) {
    console.error("Failed to fetch product details:", error);
    return null;
  }
};

// ✅ Add a new product
export const addProduct = async (productData: any) => {
  try {
    const response = await axios.post(API_URL, productData);
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error);
    return null;
  }
};
