import apiLinks from '../util/apiLink';
import { httpService } from '../api/http.service';
const getListTimeSlot = async (params) => {
	return httpService.get(`${apiLinks.settings.getListTimeSlot}`);
};
const getRoomList = async () => {
	return httpService.get(`${apiLinks.settings.getRoomList}`);
};

const settingService = {
	getListTimeSlot,
	getRoomList,
};
export default settingService;
