import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/berry";

// ✅ Fetch berry list
export const fetchBerries = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data.results; // Returns the list of berries
  } catch (error) {
    console.error("Failed to fetch berries:", error);
    return [];
  }
};

// ✅ Fetch berry details
export const fetchBerryDetail = async (berryUrl: string) => {
  try {
    const response = await axios.get(berryUrl);
    return response.data; // Returns berry details
  } catch (error) {
    console.error("Failed to fetch berry details:", error);
    return null;
  }
};
