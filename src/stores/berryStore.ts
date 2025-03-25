import { defineStore } from "pinia";
import { ref } from "vue";
import { fetchBerries, fetchBerryDetail } from "@/api/berry"; // ✅ Import API functions

export const useBerryStore = defineStore("berryStore", () => {
  const berries = ref<{ name: string; url: string }[]>([]);
  const berryDetail = ref(null);

  const loadBerries = async () => {
    berries.value = await fetchBerries(); // ✅ Uses API function
  };

  const loadBerryDetail = async (berryUrl: string) => {
    berryDetail.value = await fetchBerryDetail(berryUrl); // ✅ Uses API function
  };

  return { berries, berryDetail, loadBerries, loadBerryDetail };
});
