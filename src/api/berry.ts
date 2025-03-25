import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/berry';

export const fetchBerries = async () => {
    try {
        const response = await axios.get(API_URL);
        console.log(response);

        return response.data.result;
    } catch (error) {
        console.log(error);
        return [];
    }
};
