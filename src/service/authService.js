// import httpClient from '../api/httpClient';
import { httpService } from '../api/http.service';
import apiLinks from '../util/apiLink';
const login = (token) => {
  return httpService.post(apiLinks.customer.login, { idToken: token })
}
const updatePhoneNumber = async (userInfo, phone) => {
  const updateProps = {
    id: userInfo.id,
    Name: userInfo.name,
    ImageUrl: userInfo.imageUrl,
    Phone: phone
  }
  return httpService.put(`${apiLinks.customer.update}/${userInfo.id}`, updateProps)
};
// const login = async (token) => {
//   const loginProp = {
//     idToken: token
//   }
//   const response = await httpClient.post({
//     url: apiLinks.customer.login,
//     data: loginProp,
//   });
//   console.log(response);
//   return response.data;
// };
// const updatePhoneNumber = async (userInfo, phone) => {
//   const updateProps = {
//     Name: userInfo.name,
//     ImageUrl: userInfo.imageUrl,
//     Phone: phone
//   }
//   const response = await httpClient.put({
//     url: apiLinks.customer.update,
//     params: userInfo.id,
//     data: updateProps,
//   });
//   return response.data;
// };


const authService = {
  login,
  updatePhoneNumber
};

export default authService;