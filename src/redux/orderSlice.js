import orderService from '../service/orderService';
import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { removeCart } from './cartSlice';
import { setSuccessMessage } from './messageSlice';
// normal action
// export const addToCart = createAsyncThunk('cartSlice/addToCart', (product, thunkAPI) => {
//     console.log(product)

//     let existed = false;
//     const curCart = state.cart
//     console.log(state)
//     const newCart = curCart.forEach((cart) => {
//         if (product.id == cart.product.id) {
//             existed = true;
//             return cart.product.quantity + 1;
//         }
//     })
//     if (!existed) {
//         newCart.push({
//             product,
//             quantity: 1
//         })
//     }
//     thunkAPI.dispatch(calculateToTalAmount(newCart))
//     return {
//         payload: { newCart },
//     };
// });
export const createOrder = createAsyncThunk('order/createOrder', async (data, thunkAPI) => {
	try {
		// const res = await orderService.createOrder(data);
		// console.log(res);

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
	reducers: {},
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
export const {} = actions;
export default reducer;
