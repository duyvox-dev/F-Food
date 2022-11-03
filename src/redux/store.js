import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../redux/authSlice';
import productSlice from '../redux/product';
import menuSlice from '../redux/menuSlice';
import categorySice from '../redux/categorySlice';
import cartSlice from '../redux/cartSlice';
import messageSlice from '../redux/messageSlice';
import miscSlice from '../redux/miscSlice';
import orderSlice from '../redux/orderSlice';
import settingSlice from '../redux/settingSlice';

export const store = configureStore({
	reducer: {
		auth: authSlice,
		product: productSlice,
		menu: menuSlice,
		category: categorySice,
		cart: cartSlice,
		message: messageSlice,
		misc: miscSlice,
		order: orderSlice,
		setting: settingSlice,
	},
});
