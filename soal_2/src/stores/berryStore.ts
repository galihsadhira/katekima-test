import { defineStore } from "pinia";
import { ref } from "vue";
import { fetchBerries, fetchBerryDetail } from "@/api/berry";
import type { Pagination } from "@/@types/types.t";

export const useBerryStore = defineStore("berryStore", () => {
  const berries = ref<{ name: string; url: string }[]>([]);
  const berryDetail = ref(null);

  const loadBerries = async (params: Pagination = { limit: 100, offset: 0 }) => {
    const data = await fetchBerries(params);
    berries.value = await fetchBerries(params);
  };

  const loadBerryDetail = async (berryUrl: string) => {
    berryDetail.value = await fetchBerryDetail(berryUrl);
  };

  return { berries, berryDetail, loadBerries, loadBerryDetail };
});
