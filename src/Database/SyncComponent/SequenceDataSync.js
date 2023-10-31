//import liraries
import fetchData from '../ApiHandle';
import { fetchAllSequenceData, updateOrInsertSequenceData } from '../Schema/Devices/SequenceTable';

// create a component
const SequenceDataSync = async (date, setIsLoading) => {
  try {
    const res = await fetchData(date);
    const apiData = res?.devices?.sequences;
    const existingAreaData = await fetchAllSequenceData();

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
          updateOrInsertSequenceData([item]);
        }
      }
    }

    setIsLoading(false);
  } catch (error) {
    console.log('Error fetching data from the API:', error);
    setIsLoading(false);
  }
};

export default SequenceDataSync;
