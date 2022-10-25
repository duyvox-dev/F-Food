import axios from 'axios';
import { startLoading, stopLoading } from '../redux/miscSlice';
import { store } from '../redux/store';
const TIME_REQUEST_MAX = 3;

export const httpService = axios.create({
	timeout: 1000 * TIME_REQUEST_MAX,
});

httpService.interceptors.request.use(
	function (config) {
		store.dispatch(startLoading());
		return config;
	},
	function (error) {
		store.dispatch(stopLoading());

		return Promise.reject(error);
	}
);

httpService.interceptors.response.use(
	function (response) {
		store.dispatch(stopLoading());

		return response;
	},
	function (error) {
		store.dispatch(stopLoading());

		return Promise.reject(error);
	}
);
