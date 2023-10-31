//import liraries
import fetchData from '../ApiHandle';
import {
  fetchAllMacroData,
  updateOrInsertMacroData,
} from '../Schema/Devices/MacroTable';

// create a component
const MacroDataSync = async (date, setIsLoading) => {
  try {
    const res = await fetchData(date);
    const apiData = res?.devices?.macroirs;
    const existingAreaData = await fetchAllMacroData();

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
          updateOrInsertMacroData([item]);
        }
      }
    }

    setIsLoading(false);
  } catch (error) {
    console.log('Error fetching data from the API:', error);
    setIsLoading(false);
  }
};

export default MacroDataSync;
