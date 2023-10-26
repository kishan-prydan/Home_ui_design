//import liraries
import fetchData from '../ApiHandle';
import {
  fetchAllRgbwData,
  updateOrInsertRgbwData,
} from '../Schema/Devices/RgbwTable';

// create a component
const RgbwDataSync = async (date, setIsLoading) => {
  try {
    const res = await fetchData(date);
    const apiData = res?.devices[4];
    const existingAreaData = await fetchAllRgbwData();

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
          updateOrInsertRgbwData([item]);
        }
      }
    }

    setIsLoading(false);
  } catch (error) {
    console.log('Error fetching data from the API:', error);
    setIsLoading(false);
  }
};

export default RgbwDataSync;
