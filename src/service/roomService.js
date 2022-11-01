import apiLinks from '../util/apiLink';
import { httpService } from '../api/http.service';
const getAllRoom = () => {
	return httpService.get(apiLinks.room.getAllRoom);
};

const roomService = {
	getAllRoom,
};
export default roomService;
