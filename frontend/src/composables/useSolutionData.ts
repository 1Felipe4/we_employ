// useAttendanceData.js
import { ref, onMounted } from 'vue';
import axios from 'axios';
export const backendUrl = import.meta.env.PROD ? '' : 'http://127.0.0.1:5000'

export function useSolutionData() {
  const solutionData: any = ref([]);
  const meta = ref({
    loaded: false
  });

  const getSolutionData = async (year = 2023, countries = []) => {
    meta.value.loaded = false
    try {
      const params: any = {
        year: year,
      }
      if (countries.length) {
        params.countries = countries.join(',')

      }
      const response = await axios.get(`${backendUrl}/api/solution`, {
        params: params
      });

      solutionData.value = response.data;
      meta.value.loaded = true

    } catch (error) {
      // Handle error
      meta.value.loaded = true

      console.error('Error fetching solution data:', error);
      throw error; // Rethrow the error to be handled by the calling code
    }
  }

  onMounted(async () => {
    getSolutionData()
  });



  return {
    solutionData,
    meta,
    getSolutionData
  };
}
