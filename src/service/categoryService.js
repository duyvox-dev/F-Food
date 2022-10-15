import httpClient from "../api/httpClient"
import apiLinks from "../util/apiLink"
const getAllCategory = async (params) => {
    const res = await httpClient.get({
        url: apiLinks.category.getAllCategory,
        params: params,
    })
    return res.data
}
const menuService = {
    getAllCategory
}
export default menuService