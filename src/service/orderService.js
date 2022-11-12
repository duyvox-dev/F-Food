import apiLinks from '../util/apiLink';
import { httpService } from '../api/http.service';

const createOrder = (data) => {
	return httpService.post(`${apiLinks.order.createOrder}`, data);
};
const getListOrderByOrderStatus = (userId, statusId) => {
	return httpService.get(
		`${apiLinks.order.getListOrderByOrderStatus}?orderStatus=${statusId}&customerId=${userId}&Page=1&PageSize=999`
	);
};
const updateOrderStatus = (orderId, statusId) => {
	return httpService.put(`${apiLinks.order.updateOrderStatus}?orderStatus=${statusId}&orderId=${orderId}`);
};
const getOrderDetail = (orderId) => {
	return httpService.get(`${apiLinks.order.getOrderDetail}${orderId}`);
};
const orderService = {
	createOrder,
	getListOrderByOrderStatus,
	updateOrderStatus,
	getOrderDetail,
};
export default orderService;
