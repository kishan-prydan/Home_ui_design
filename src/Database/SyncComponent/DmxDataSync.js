//import liraries
import fetchData from '../ApiHandle';
import {
  fetchAllDmxData,
  updateOrInsertDmxData,
} from '../Schema/Devices/DmxTable';

// create a component
const DmxDataSync = async (date, setIsLoading) => {
  try {
    const res = await fetchData(date);
    const apiData = res?.devices[3];

    const existingAreaData = await fetchAllDmxData();

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
          updateOrInsertDmxData([item]);
        }
      }
    }

    setIsLoading(false);
  } catch (error) {
    console.log('Error fetching data from the API:', error);
    setIsLoading(false);
  }
};

export default DmxDataSync;
