import { httpService } from "../api/http.service"
import apiLinks from "../util/apiLink"
const getAllCategory = async (params) => {
    return httpService.get(apiLinks.category.getAllCategory)
}
const menuService = {
    getAllCategory
}
export default menuService