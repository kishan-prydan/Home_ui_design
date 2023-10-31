import * as auth from "./auth";
import * as setAreazoneId from "./setAreazoneId";
import * as getRgbwData from "./getRgbwDataByDeviceId";


export default{
	...auth,
	...setAreazoneId,
	...getRgbwData
}