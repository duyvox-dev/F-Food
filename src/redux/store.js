import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../redux/authSlice';
import productSlice from '../redux/product';
import menuSlice from '../redux/menuSlice';
import categorySice from '../redux/categorySlice';
import cartSlice from '../redux/cartSlice';
import messageSlice from '../redux/messageSlice';
export const store = configureStore({
	reducer: {
		auth: authSlice,
		product: productSlice,
		menu: menuSlice,
		category: categorySice,
		cart: cartSlice,
		message: messageSlice,
	},
});
