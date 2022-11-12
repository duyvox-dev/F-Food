import axios from 'axios';
import { startLoading, stopLoading } from '../redux/miscSlice';
import { store } from '../redux/store';
const TIME_REQUEST_MAX = 60;

export const httpService = axios.create({
	timeout: 1000 * TIME_REQUEST_MAX,
	headers: {
		'Content-Type': 'application/json',
	},
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
