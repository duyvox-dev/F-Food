import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../redux/authSlice';
import productSlice from '../redux/product';
import menuSlice from '../redux/menuSlice';
export const store = configureStore({
    reducer: {
        auth: authSlice,
        product: productSlice,
        menu: menuSlice,
    },
});
