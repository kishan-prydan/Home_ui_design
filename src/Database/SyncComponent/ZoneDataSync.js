import {fetchAllZoneData, updateOrInsertZoneData} from '../Schema/ZoneDetails';
import fetchData from '../ApiHandle';

const ZoneDataSync = async (date, setIsLoading) => {
  try {
    const apiData = await fetchData(date);

    // console.log('api data in zone component', apiData);
    
    const existingZoneData = await fetchAllZoneData();

    // Check if apiData is not null or undefined
    if (apiData && apiData.zones) {
      // Store zone data
      for (const item of apiData.zones) {
        const existingItem = existingZoneData.find(
          dataItem => dataItem._id === item._id,
        );
        if (
          !existingItem ||
          JSON.stringify(existingItem) !== JSON.stringify(item)
        ) {
          updateOrInsertZoneData([item]);
        }
      }
    }

    setIsLoading(false);
  } catch (error) {
    console.log('Error fetching data from the API:', error);
    setIsLoading(false);
  }
};

export default ZoneDataSync;
