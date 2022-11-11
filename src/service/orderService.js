import apiLinks from '../util/apiLink';
import { httpService } from '../api/http.service';

const createOrder = (data) => {
	return httpService.post(`${apiLinks.order.createOrder}`, data);
};
const getListOrderByOrderStatus = (userId, statusId) => {
	return httpService.get(`${apiLinks.order.getListOrderByOrderStatus}?orderStatus=${statusId}&customerId=${userId}`);
};
const updateOrderStatus = (orderId, statusId) => {
	return httpService.put(`${apiLinks.order.getListOrderByOrderStatus}?orderStatus=${statusId}&orderId=${orderId}`);
};
const orderService = {
	createOrder,
	getListOrderByOrderStatus,
	updateOrderStatus,
};
export default orderService;
