import fetchData from '../ApiHandle';
import {fetchAllAreaData, updateOrInsertAreaData} from '../Schema/AreaDetails';

const AreaDataSync = async (date, setIsLoading) => {
  try {
    const apiData = await fetchData(date);

    // console.log('api data in area component', apiData);

    const existingAreaData = await fetchAllAreaData();

    // Check if apiData is not null or undefined
    if (apiData && apiData.areas) {
      // Store area data
      for (const item of apiData.areas) {
        const existingItem = existingAreaData.find(
          dataItem => dataItem._id === item._id,
        );
        if (
          !existingItem ||
          JSON.stringify(existingItem) !== JSON.stringify(item)
        ) {
          updateOrInsertAreaData([item]);
        }
      }
    }

    setIsLoading(false);
  } catch (error) {
    console.log('Error fetching data from the API:', error);
    setIsLoading(false);
  }
};

export default AreaDataSync;
