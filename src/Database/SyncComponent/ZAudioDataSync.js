//import liraries
import fetchData from '../ApiHandle';
import { fetchAllZAudioData, updateOrInsertZAudioData } from '../Schema/Devices/ZAudioTable';

// create a component
const ZAudioDataSync = async (date, setIsLoading) => {
  try {
    const res = await fetchData(date);
    const apiData = res?.devices?.zaudios;
    const existingAreaData = await fetchAllZAudioData();

    // Check if apiData is not null or undefined
    if (apiData) {
      // Store data
      for (const item of apiData) {
        const existingItem = existingAreaData.find(
          dataItem => dataItem._id === item._id,
        );
        if (
          !existingItem ||
          JSON.stringify(existingItem) !== JSON.stringify(item)
        ) {
          updateOrInsertZAudioData([item]);
        }
      }
    }

    setIsLoading(false);
  } catch (error) {
    console.log('Error fetching data from the API:', error);
    setIsLoading(false);
  }
};

export default ZAudioDataSync;
