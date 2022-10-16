

const baseURL = "https://ffptprojectapi20221008031045.azurewebsites.net/api/v1.0"

const apiLinks = {
  customer: {
    login: `${baseURL}/customer/login`,
    getCustomer: `${baseURL}/customer`,
    update: `${baseURL}/customer/`,
  },
  product: {
    getAllProduct: `${baseURL}/product`,
    searchProduct: `${baseURL}/product/SearchProduct`
  },
  menu: {
    getListTimeSlot: `${baseURL}/menu/GetListTimeslot`,
  },
  category: {
    getAllCategory: `${baseURL}/category/GetListCategory`
  }
}
export default apiLinks;