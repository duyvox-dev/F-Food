import apiLinks from "../util/apiLink"
import { httpService } from "../api/http.service"
const getAllProduct = () => {
    return httpService.get(apiLinks.product.getAllProduct)
}
const getProductDetail = (id) => {
    return httpService.get(`${apiLinks.product.getProductDetail}/?id=${id}`);
}

const searchProduct = async (searchText) => {
    const params = {
        searchText: searchText
    }
    const res = await httpClient.get({
        url: apiLinks.product.searchProduct,
        params: params,
    })
    return res.data
}

const productService = {
    getAllProduct,
    getProductDetail,
    searchProduct,
}
export default productService