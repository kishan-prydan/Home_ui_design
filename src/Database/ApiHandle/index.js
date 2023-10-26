import {SINC_GET_DATA} from '../../config/urls';
import { showInfo } from '../../utils/helperFunction';
import {apiGet} from '../../utils/utils';

const fetchData = async date => {
  try {
    const res = await apiGet(`${SINC_GET_DATA}/${date}`);

	// console.log('================= log data in api ================', res);

    return res;

  } catch (error) {
    console.log('Error fetching data from the API:', error)
  }
};

export default fetchData;
