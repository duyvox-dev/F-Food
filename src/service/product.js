import apiLinks from "../util/apiLink"
import { httpService } from "../api/http.service"
const getAllProduct = () => {
    return httpService.get(apiLinks.product.getAllProduct)
}
const getProductDetail = (id) => {
    return httpService.get(`${apiLinks.product.getProductDetail}/?id=${id}`);
}

const productService = {
    getAllProduct,
    getProductDetail
}
export default productService