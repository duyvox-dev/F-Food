import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productService from '../service/product';


const initialState = {
    currentProduct: {},
    products: [],
    searchProducts: [],
    getAllProductLoading: false,
}
// async action
const getAllProduct = createAsyncThunk(
    'product/getAllProduct',
    async () => {
        const result = await productService.getAllProduct();

        return result.data.results;
    },
);
const getProductDetail = createAsyncThunk(
    'product/getProductDetail',
    async (id) => {
        const result = await productService.getProductDetail(id);

        return result.data;
    },
);

const searchProduct = createAsyncThunk(
    'product/searchProduct',
    async (searchText) => {
        const result = await productService.searchProduct(searchText);
        console.log(result);
        return result.data.results;
    }
)

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
            products: payload,
            getAllProductLoading: false,
        }));
        builder.addCase(getAllProduct.rejected, (state) => ({
            ...state,
            getAllProductLoading: false,
        }));
        // get detail
        builder.addCase(getProductDetail.pending, (state) => ({
            ...state,
            getAllProductLoading: true,
        }));
        builder.addCase(getProductDetail.fulfilled, (state, { payload }) => ({
            ...state,
            currentProduct: payload,
            getAllProductLoading: false,
        }));
        builder.addCase(getProductDetail.rejected, (state) => ({
            ...state,
            getAllProductLoading: false,
        }));

        // search product
        builder.addCase(searchProduct.pending, (state) => ({
            ...state,
            getAllProductLoading: true,
        }))
        builder.addCase(searchProduct.fulfilled, (state, { payload }) => ({
            ...state,
            searchProducts: payload,
            getAllProductLoading: true,
        }))
        builder.addCase(searchProduct.rejected, (state) => ({
            ...state,
            getAllProductLoading: false,
        }))

    },
});
const { reducer, actions } = productSlice;
export const { } = actions;
export default reducer;
export {
    getAllProduct, getProductDetail, searchProduct
}
