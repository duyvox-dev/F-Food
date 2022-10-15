

const baseURL = "https://ffptprojectapi20221008031045.azurewebsites.net/api/v1.0"

const apiLinks = {
  customer: {
    login: `${baseURL}/customer/login`,
    getCustomer: `${baseURL}/customer`,
  },
  product: {
    getAllProduct: `${baseURL}/product`,

  }
}
export default apiLinks;