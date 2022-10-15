import httpClient from "../api/httpClient"
import apiLinks from "../util/apiLink"

const getListTimeSlot = async (params) => {

    const res = await httpClient.get({
        url: apiLinks.menu.getListTimeSlot,
        params: params,
    })
    return res.data
}


const menuService = {
    getListTimeSlot
}
export default menuService