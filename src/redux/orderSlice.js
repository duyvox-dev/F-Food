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
const orderSlice = createSlice({
	name: 'orderSlice',
	initialState: {
		orderSuccess: false,
		orderFail: false,
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
	},
});
const { reducer, actions } = orderSlice;
export const { resetOrderState } = actions;
export default reducer;
