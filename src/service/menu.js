import apiLinks from '../util/apiLink';
import { httpService } from '../api/http.service';
const getListTimeSlot = async (params) => {
	return httpService.get(`${apiLinks.menu.getListTimeSlot}`);
};

const menuService = {
	getListTimeSlot,
};
export default menuService;
