import apiLinks from "../util/apiLink"
import { httpService } from "../api/http.service"

const createOrder = (data) => {
    return httpService.post(`${apiLinks.order.createOrder}`, data);
}
const orderService = {
    createOrder
}
export default orderService