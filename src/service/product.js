import apiLinks from "../util/apiLink"
import { httpService } from "../api/http.service"
const getAllProduct = () => {
    return httpService.get(apiLinks.product.getAllProduct)
}
const getProductDetail = (id) => {
    return httpService.get(`${apiLinks.product.getProductDetail}/?id=${id}`);
}

const searchProduct = async (searchText) => {
    return httpService.get(`${apiLinks.product.searchProduct}?searchString=${searchText}`)
}

const productService = {
    getAllProduct,
    getProductDetail,
    searchProduct,
}
export default productService