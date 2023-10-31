//import liraries
import fetchData from '../ApiHandle';
import {
  fetchAllOtherControlsData,
  updateOrInsertOtherControlsData,
} from '../Schema/Devices/OtherControlsTable';

// create a component
const OtherControlsDataSync = async (date, setIsLoading) => {
  try {
    const res = await fetchData(date);
    const apiData = res?.devices?.othecontrols;
    // console.log('other control data============', apiData);

    const existingAreaData = await fetchAllOtherControlsData();

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
          updateOrInsertOtherControlsData([item]);
        }
      }
    }

    setIsLoading(false);
  } catch (error) {
    console.log('Error fetching data from the API:', error);
    setIsLoading(false);
  }
};

export default OtherControlsDataSync;
