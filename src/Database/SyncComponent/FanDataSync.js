//import liraries
import fetchData from '../ApiHandle';
import {
  fetchAllFanData,
  updateOrInsertFanData,
} from '../Schema/Devices/FanTable';

// create a component
const FanDataSync = async (date, setIsLoading) => {
  try {
    const res = await fetchData(date);
    const apiData = res?.devices[5];

    const existingAreaData = await fetchAllFanData();

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
          updateOrInsertFanData([item]);
        }
      }
    }

    setIsLoading(false);
  } catch (error) {
    console.log('Error fetching data from the API:', error);
    setIsLoading(false);
  }
};

export default FanDataSync;
