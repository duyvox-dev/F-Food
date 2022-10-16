import httpClient from '../api/httpClient';
import apiLinks from '../util/apiLink';
const login = async (token) => {
  const loginProp = {
    idToken: token
  }
  const response = await httpClient.post({
    url: apiLinks.customer.login,
    data: loginProp,
  });
  console.log(response);
  return response.data;
};
const updatePhoneNumber = async (userInfo, phone) => {
  const updateProps = {
    id: userInfo.id,
    Name: userInfo.name,
    ImageUrl: userInfo.imageUrl,
    Phone: phone
  }
  const response = await httpClient.put({
    url: apiLinks.customer.update,
    data: updateProps,
  });
  return response.data;
};


const authService = {
  login, updatePhoneNumber
};

export default authService;