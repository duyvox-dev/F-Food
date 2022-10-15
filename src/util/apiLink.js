

const baseURL= "https://ffptprojectapi20221008031045.azurewebsites.net/api/v1.0/customer"

const apiLinks = {
    customer: {
        login: `${baseURL}/login`,       
        getCustomer: `${baseURL}`,       
      },
}
export default apiLinks;