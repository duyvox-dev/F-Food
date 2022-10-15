import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productService from '../service/product';


const initialState = {
    accessToken: '',
    getAllRespone: {},
    getAllProductLoading: false,
}
// async action
const getAllProduct = createAsyncThunk(
    'auth/getAllProduct',
    async () => {
        const result = await productService.getAllProduct();
        console.log(result);
        return result;
    },
);

// normal action


const productSlice = createSlice({
    name: 'productSlice',
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        // get user info
        builder.addCase(getAllProduct.pending, (state) => ({
            ...state,
            getAllProductLoading: true,
        }));
        builder.addCase(getAllProduct.fulfilled, (state, { payload }) => ({
            ...state,
            getAllRespone: payload,
            getAllProductLoading: false,
        }));
        builder.addCase(getAllProduct.rejected, (state) => ({
            ...state,
            getAllProductLoading: false,
        }));

    },
});
const { reducer, actions } = productSlice;
export const { } = actions;
export default reducer;
export {
    getAllProduct,
}
