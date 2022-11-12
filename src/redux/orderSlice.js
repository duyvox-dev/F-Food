import orderService from '../service/orderService';
import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { removeCart } from './cartSlice';
import { setSuccessMessage } from './messageSlice';
export const createOrder = createAsyncThunk('order/createOrder', async (data, thunkAPI) => {
	try {
		// console.log(data);
		const res = await orderService.createOrder(data);
		console.log(res);

		thunkAPI.dispatch(setSuccessMessage('Đặt hàng thành công.'));
		thunkAPI.dispatch(removeCart());

		return {};
	} catch (error) {
		// message.error(error.response.data.message);
		return thunkAPI.rejectWithValue();
	}
});
export const getListOrderByOrderStatus = createAsyncThunk(
	'order/getListOrderByOrderStatus',
	async (statusId, thunkAPI) => {
		try {
			const { auth } = await thunkAPI.getState();
			const res = await orderService.getListOrderByOrderStatus(auth.user.id, statusId);
			return res.data.results;
		} catch (error) {
			// message.error(error.response.data.message);
			return thunkAPI.rejectWithValue();
		}
	}
);
export const getOrderDetail = createAsyncThunk('order/getOrderDetail', async (orderId, thunkAPI) => {
	try {
		const res = await orderService.getOrderDetail(orderId);
		return res.data;
	} catch (error) {
		// message.error(error.response.data.message);
		return thunkAPI.rejectWithValue();
	}
});
export const updateOrderStatus = createAsyncThunk('order/updateOrderStatus', async (orderId, thunkAPI) => {
	try {
		const { auth } = await thunkAPI.getState();
		// console.log(orderId);
		const res = await orderService.updateOrderStatus(orderId, 1);
		// thunkAPI.dispatch(setSuccessMessage('Huỷ đơn hàng thành công.'));
		thunkAPI.dispatch(getOrderDetail(orderId));
		// await thunkAPI.getState(getListOrderByOrderStatus(1));
		return {};
	} catch (error) {
		// message.error(error.response.data.message);
		return thunkAPI.rejectWithValue();
	}
});

const orderSlice = createSlice({
	name: 'orderSlice',
	initialState: {
		orderSuccess: false,
		orderFail: false,
		orderDetailList: [],
		currentOrder: {},
	},
	reducers: {
		resetOrderState: (state, action) => {
			state.orderSuccess = false;
			state.orderFail = false;
		},
	},
	extraReducers: {
		[createOrder.pending]: (state) => {
			state.orderSuccess = false;
			state.orderFail = false;
		},
		[createOrder.fulfilled]: (state, { payload }) => {
			state.orderSuccess = true;
		},
		[createOrder.rejected]: (state) => {
			state.orderSuccess = false;
			state.orderFail = true;
		},
		//
		[getListOrderByOrderStatus.pending]: (state) => {
			state.orderDetailList = [];
		},
		[getListOrderByOrderStatus.fulfilled]: (state, { payload }) => {
			state.orderDetailList = payload;
		},
		[getListOrderByOrderStatus.rejected]: (state) => {},
		//
		[getOrderDetail.pending]: (state) => {
			state.currentOrder = {};
		},
		[getOrderDetail.fulfilled]: (state, { payload }) => {
			state.currentOrder = payload;
		},
		[getOrderDetail.rejected]: (state) => {},
		//
		[updateOrderStatus.pending]: (state) => {
			state.currentOrder = {};
		},
		[updateOrderStatus.fulfilled]: (state, { payload }) => {
			state.currentOrder = payload;
		},
		[updateOrderStatus.rejected]: (state) => {},
	},
});
const { reducer, actions } = orderSlice;
export const { resetOrderState } = actions;
export default reducer;
