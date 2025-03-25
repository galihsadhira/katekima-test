import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export const useBerryStore = defineStore('berryStore', () => {
    const berries = ref<{ name: string }[]>([]);

    const loadBerries = async () => {
        try {
            console.log('Fetching berries...');
            const response = await axios.get(
                'https://pokeapi.co/api/v2/berry/'
            );
            berries.value = response.data.results;
            console.log(berries.value, '=== berries fetched');
        } catch (error) {
            console.error('Error fetching berries:', error);
        }
    };

    return { berries, loadBerries };
});
