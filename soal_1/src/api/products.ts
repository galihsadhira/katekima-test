import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

export const addProduct = async (productData: any) => {
    try {
        const response = await axios.post(API_URL, productData);
        return response.data;
    } catch (error) {
        console.error('Error adding product:', error);
        return null;
    }
};
