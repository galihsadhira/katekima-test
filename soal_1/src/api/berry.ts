import axios from "axios";
import type { Pagination } from "@/@types/types.t";
const BASE_URL = "https://pokeapi.co/api/v2/berry";

// ✅ Fetch berry list
export const fetchBerries = async (params: Pagination) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        limit: params.limit ?? 100,
        offset: params.offset ?? 0,
      },
    });

    return response.data.results.sort((a: any, b: any) => a.name.localeCompare(b.name));
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
