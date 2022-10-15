import httpClient from '../api/httpClient';
import apiLinks from '../util/apiLink';
const login = async ( token) => {
    const loginProp = {
        idToken:token
    }
    const response = await httpClient.post({
        url: apiLinks.customer.login,
        data: loginProp,
      });
      console.log(response);
    return response.data ;
  };


  const authService = {
    login, 
  };

  export default authService;