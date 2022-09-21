import axios from 'axios';
import { store } from '../redux/store';
export const BASE_URL = process.env.REACT_APP_BASE_URL;
const TIME_REQUEST_MAX = 3;

export const httpService = axios.create({
	baseURL: BASE_URL,
	timeout: 1000 * TIME_REQUEST_MAX,
});

httpService.interceptors.request.use(
	function (config) {
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

httpService.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		return Promise.reject(error);
	}
);
