//import liraries
import fetchData from '../ApiHandle';
import {
  fetchAllCameraData,
  updateOrInsertCameraData,
} from '../Schema/Devices/CameraTable';

// create a component
const CameraDataSync = async (date, setIsLoading) => {
  try {
    const res = await fetchData(date);
    const apiData = res?.devices[6];

    const existingAreaData = await fetchAllCameraData();

    // Check if apiData is not null or undefined
    if (apiData) {
      // Store data
      for (const item of apiData) {
        const existingItem = existingAreaData.find(
          dataItem => dataItem?._id === item?._id,
        );
        if (
          !existingItem ||
          JSON.stringify(existingItem) !== JSON.stringify(item)
        ) {
          updateOrInsertCameraData([item]);
        }
      }
    }

    setIsLoading(false);
  } catch (error) {
    console.log('Error fetching data from the API:', error);
    setIsLoading(false);
  }
};

export default CameraDataSync;
