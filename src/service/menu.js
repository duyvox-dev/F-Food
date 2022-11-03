import apiLinks from '../util/apiLink';
import { httpService } from '../api/http.service';
const getListTimeSlot = async (params) => {
	return httpService.get(`${apiLinks.menu.getListTimeSlot}`);
};
const getMenuList = async (timeSlot) => {
	return httpService.get(`${apiLinks.menu.getMenuByTimeSlot}?timeSlotId=${timeSlot}`);
};

const menuService = {
	getListTimeSlot,
	getMenuList,
};
export default menuService;
