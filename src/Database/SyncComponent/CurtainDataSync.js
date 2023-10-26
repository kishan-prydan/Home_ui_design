//import liraries
import fetchData from '../ApiHandle';
import {
  fetchAllCurtainData,
  updateOrInsertCurtainData,
} from '../Schema/Devices/CurtainTable';

// create a component
const CurtainDataSync = async (date, setIsLoading) => {
  try {
    const res = await fetchData(date);
    const apiData = res?.devices[2];

    const existingAreaData = await fetchAllCurtainData();

    // Check if apiData is not null or undefined
    if (apiData) {
      // Store area data
      for (const item of apiData) {
        const existingItem = existingAreaData.find(
          dataItem => dataItem?._id === item?._id,
        );
        if (
          !existingItem ||
          JSON.stringify(existingItem) !== JSON.stringify(item)
        ) {
          updateOrInsertCurtainData([item]);
        }
      }
    }

    setIsLoading(false);
  } catch (error) {
    console.log('Error fetching data from the API:', error);
    setIsLoading(false);
  }
};

export default CurtainDataSync;
