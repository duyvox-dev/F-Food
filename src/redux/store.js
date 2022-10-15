import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../redux/authSlice';
import productSlice from '../redux/product';
export const store = configureStore({
    reducer: {
        auth: authSlice,
        product: productSlice
    },
});
