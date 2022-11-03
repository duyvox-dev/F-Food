import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productService from '../service/product';

const initialState = {
	currentProduct: {},
	products: [],
	productInMenu: [],
	searchProducts: [],
	getAllProductLoading: false,
};
// async action
const getAllProduct = createAsyncThunk('product/getAllProduct', async (data, thunkAPI) => {
	try {
		const { setting } = thunkAPI.getState();
		const { currentTimeSlot } = setting;

		const result = await productService.getAllProduct(currentTimeSlot.id);
		return result.data.results;
	} catch (error) {
		// message.error(error.response.data.message);
		return thunkAPI.rejectWithValue();
	}
});
const getProductDetail = createAsyncThunk('product/getProductDetail', async (id) => {
	const result = await productService.getProductDetail(id);

	return result.data;
});
const getProductByMenu = createAsyncThunk(
	'product/getProductByMenu',

	async (id, thunkAPI) => {
		try {
			const result = await productService.getProductByMenu(id);
			return result.data.results;
		} catch (error) {
			// message.error(error.response.data.message);
			return thunkAPI.rejectWithValue();
		}
	}
);

const getProductByCategory = createAsyncThunk(
	'product/getProductByCategory',

	async (categoryId, thunkAPI) => {
		try {
			const { setting } = thunkAPI.getState();
			const { currentTimeSlot } = setting;

			const result = await productService.getProductByCategory(currentTimeSlot.id, categoryId);

			return result.data.results;
		} catch (error) {
			// message.error(error.response.data.message);
			return thunkAPI.rejectWithValue();
		}
	}
);

const searchProduct = createAsyncThunk(
	'product/searchProduct',

	async (searchText, thunkAPI) => {
		try {
			const { setting } = thunkAPI.getState();
			const { currentTimeSlot } = setting;

			const result = await productService.searchProduct(currentTimeSlot.id, searchText);
			return result.data.results;
		} catch (error) {
			// message.error(error.response.data.message);
			return thunkAPI.rejectWithValue();
		}
	}
);

// normal action

const productSlice = createSlice({
	name: 'productSlice',
	initialState: initialState,
	reducers: {},
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

		// get product by category
		builder.addCase(getProductByCategory.pending, (state) => ({
			...state,
			getAllProductLoading: true,
		}));
		builder.addCase(getProductByCategory.fulfilled, (state, { payload }) => ({
			...state,
			products: payload,
			getAllProductLoading: false,
		}));
		builder.addCase(getProductByCategory.rejected, (state) => ({
			...state,
			getAllProductLoading: false,
		}));

		// search product
		builder.addCase(searchProduct.pending, (state) => ({
			...state,
			getAllProductLoading: true,
		}));
		builder.addCase(searchProduct.fulfilled, (state, { payload }) => ({
			...state,
			searchProducts: payload,
			getAllProductLoading: true,
		}));
		builder.addCase(searchProduct.rejected, (state) => ({
			...state,
			getAllProductLoading: false,
		}));
		// get product in menu
		builder.addCase(getProductByMenu.pending, (state) => ({
			...state,
			productInMenu: [],
		}));
		builder.addCase(getProductByMenu.fulfilled, (state, { payload }) => ({
			...state,
			productInMenu: payload,
		}));
		builder.addCase(getProductByMenu.rejected, (state) => ({
			...state,
		}));
	},
});
const { reducer, actions } = productSlice;
export const {} = actions;
export default reducer;
export { getAllProduct, getProductDetail, getProductByCategory, searchProduct, getProductByMenu };
