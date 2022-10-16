import httpClient from "../api/httpClient"
import apiLinks from "../util/apiLink"

const getAllProduct = async (params) => {
    const res = await httpClient.get({
        url: apiLinks.product.getAllProduct,
        params: params,
    })
    return res.data
}


const getProductDetail = async (id) => {
    const params = {
        id: id
    }
    const res = await httpClient.get({
        url: apiLinks.product.getAllProduct,
        params: params,
    })
    return res.data
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