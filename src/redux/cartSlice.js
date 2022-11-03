import { localStorageService } from '../util/localStorage.util';
import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setErrorMessage, setSuccessMessage } from './messageSlice';
import { groupCarts } from '../util/order.util';
const LIMIT_ITEM_QUANTITY = 10;
const getInitState = () => {
	const data = localStorageService.getCartLocal();
	if (data) return data;
	return {
		carts: [],
		totalAmount: 0,
	};
};
const initialState = getInitState();
// normal action
export const removeCart = createAction('cartSlice/removeCart', () => {
	localStorageService.removeCartLocal();
	return {
		payload: {},
	};
});
export const changeQuantityCart = createAsyncThunk('cartSlice/changeQuantityCart', (cartItem, thunkAPI) => {
	try {
		const { cart } = thunkAPI.getState();
		const { carts } = cart;
		console.log(cartItem);
		let indexToDelete = -1;
		let newCart = [];
		if (cartItem.quantity <= LIMIT_ITEM_QUANTITY) {
			newCart = carts?.map((cart, index) => {
				if (cartItem.productMenuId == cart.product.productMenuId) {
					if (cartItem.quantity <= 0) indexToDelete = index;
					return {
						...cart,
						quantity: cartItem.quantity,
					};
				}
				return cart;
			});
			if (indexToDelete != -1) {
				newCart.splice(indexToDelete, 1);
				thunkAPI.dispatch(setSuccessMessage('Xoá sản phẩm thành công.'));
			} else {
				thunkAPI.dispatch(setSuccessMessage('Thay đổi số lượng thành công.'));
			}
			return newCart;
		} else throw 'Số lượng không được vượt quá 10/sản phẩm.';
	} catch (err) {
		thunkAPI.dispatch(setErrorMessage(err));
		return thunkAPI.rejectWithValue();
	}
});
export const addToCart = createAsyncThunk('cartSlice/addToCart', (product, thunkAPI) => {
	try {
		let existed = false;
		const { cart } = thunkAPI.getState();
		const { carts } = cart;
		let newCart = [];
		newCart = carts?.map((cartItem, index) => {
			if (product.productMenuId == cartItem.product.productMenuId) {
				existed = true;
				const newQuantity = cartItem.quantity + 1;
				if (newQuantity <= LIMIT_ITEM_QUANTITY)
					return {
						...cartItem,
						quantity: newQuantity,
					};
				else {
					console.log('limit');
					throw 'Số lượng không được vượt quá 10/sản phẩm.';
				}
			}
			return cartItem;
		});
		thunkAPI.dispatch(setSuccessMessage('Thêm sản phẩm thành công.'));
		if (!existed) {
			newCart.push({
				product: product,
				quantity: 1,
			});
		}
		return newCart;
	} catch (err) {
		thunkAPI.dispatch(setErrorMessage(err));
		return thunkAPI.rejectWithValue();
	}
});
const cartSlice = createSlice({
	name: 'cartSlice',
	initialState: initialState,
	reducers: {
		setTotalQuantity: (state, { payload }) => {
			state.totalAmount = payload;
		},
		// changeQuantityCart: (state, { payload }) => {
		// 	let indexToDelete = -1;
		// 	let newCart = [];
		// 	newCart = state?.carts.map((cart, index) => {
		// 		if (payload.id == cart.product.id) {
		// 			if (payload.quantity <= 0) indexToDelete = index;
		// 			return {
		// 				...cart,
		// 				quantity: payload.quantity,
		// 			};
		// 		}
		// 		return cart;
		// 	});
		// 	if (indexToDelete != -1) {
		// 		newCart.splice(indexToDelete, 1);
		// 	}
		// 	state.carts = newCart;
		// 	localStorageService.setCartLocal(state);
		// },
		// addToCart: (state, { payload }) => {
		// 	let existed = false;
		// 	let newCart = [];
		// 	newCart = state?.carts.map((cart) => {
		// 		if (payload.id == cart.product.id) {
		// 			existed = true;
		// 			const newQuantity = cart.quantity + 1;
		// 			return {
		// 				...cart,
		// 				quantity: newQuantity,
		// 			};
		// 		}
		// 		return cart;
		// 	});
		// 	if (!existed) {
		// 		newCart.push({
		// 			product: payload,
		// 			quantity: 1,
		// 		});
		// 	}
		// 	state.carts = newCart;
		// 	localStorageService.setCartLocal(state);
		// },
		// decQuantityCart: (state, { payload }) => {
		// 	let indexToDelete = -1;
		// 	let newCart = [];

		// 	newCart = state?.carts.map((cart, index) => {
		// 		if (payload.id == cart.product.id) {
		// 			const newQuantity = cart.quantity - 1;
		// 			if (newQuantity <= 0) indexToDelete = index;
		// 			return {
		// 				...cart,
		// 				quantity: newQuantity,
		// 			};
		// 		}
		// 		return cart;
		// 	});
		// 	if (indexToDelete != -1) {
		// 		newCart.splice(indexToDelete, 1);
		// 	}
		// 	state.carts = newCart;
		// 	localStorageService.setCartLocal(state);
		// },
		removeCart: (state, { payload }) => {
			state.carts = [];
			state.totalAmount = 0;
		},
	},
	extraReducers: {
		[changeQuantityCart.fulfilled]: (state, { payload }) => {
			state.carts = payload;
			localStorageService.setCartLocal(state);
		},
		[changeQuantityCart.rejected]: (state, { payload }) => {
			// state.carts = payload;
			// localStorageService.setCartLocal(state);
		},
		[addToCart.fulfilled]: (state, { payload }) => {
			state.carts = payload;
			localStorageService.setCartLocal(state);
			console.log(groupCarts(state.carts));
		},
		[addToCart.rejected]: (state, { payload }) => {
			// state.carts = payload;
			// localStorageService.setCartLocal(state);
		},
	},
});
export const { setTotalQuantity } = cartSlice.actions;
export default cartSlice.reducer;
