//import liraries
import fetchData from '../ApiHandle';
import {
  fetchAllIrrigationData,
  updateOrInsertIrrigationData,
} from '../Schema/Devices/IrrigationTable';

// create a component
const IrrigationDataSync = async (date, setIsLoading) => {
  try {
    const res = await fetchData(date);
    const apiData = res?.devices?.irrigations;

    const existingAreaData = await fetchAllIrrigationData();

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
          updateOrInsertIrrigationData([item]);
        }
      }
    }

    setIsLoading(false);
  } catch (error) {
    console.log('Error fetching data from the API:', error);
    setIsLoading(false);
  }
};

export default IrrigationDataSync;
