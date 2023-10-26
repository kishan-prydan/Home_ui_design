//import liraries
import fetchData from '../ApiHandle';
import { fetchAllScenesData, updateOrInsertScenesData } from '../Schema/Devices/ScenesTable';

// create a component
const ScenesDataSync = async (date, setIsLoading) => {
  try {
    const res = await fetchData(date);
    const apiData = res?.devices[1];
    const existingAreaData = await fetchAllScenesData();

    // Check if apiData is not null or undefined
    if (apiData) {
      // Store area data
      for (const item of apiData) {
        const existingItem = existingAreaData.find(
          dataItem => dataItem._id === item._id,
        );
        if (
          !existingItem ||
          JSON.stringify(existingItem) !== JSON.stringify(item)
        ) {
          updateOrInsertScenesData([item]);
        }
      }
    }

    setIsLoading(false);
  } catch (error) {
    console.log('Error fetching data from the API:', error);
    setIsLoading(false);
  }
};

export default ScenesDataSync;
