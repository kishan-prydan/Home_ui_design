//import liraries
import fetchData from '../ApiHandle';
import { fetchAllHvacData, updateOrInsertHvacData } from '../Schema/Devices/HvacTable';


// create a component
const HvacDataSync = async (date, setIsLoading) => {
  try {
    const res = await fetchData(date);
    const apiData = res?.devices[0];

    const existingAreaData = await fetchAllHvacData();

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
          updateOrInsertHvacData([item]);
        }
      }
    }

    setIsLoading(false);
  } catch (error) {
    console.log('Error fetching data from the API:', error);
    setIsLoading(false);
  }
};

export default HvacDataSync;
