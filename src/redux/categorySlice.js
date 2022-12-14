import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import menuService from '../service/categoryService';

const initialState = {
	categoryList: [],
	currentCategory: {},
};
export const setCurrentCategory = createAsyncThunk('category/setCurrentCategory', async (id, thunkAPI) => {
	try {
		const { category } = thunkAPI.getState();
		const { categoryList } = category;
		const newCurCategory = categoryList?.find((cate) => cate.id == id);
		return newCurCategory;
	} catch (error) {
		// message.error(error.response.data.message);
		return thunkAPI.rejectWithValue();
	}
});
export const getCategoryList = createAsyncThunk('category/getCategoryList', async (data, thunkAPI) => {
	try {
		const res = await menuService.getAllCategory();
		return res.data.results;
	} catch (error) {
		// message.error(error.response.data.message);
		return thunkAPI.rejectWithValue();
	}
});

const categorySlice = createSlice({
	name: 'categorySlice',
	initialState: initialState,
	reducers: {
		// setCurrentCategory: (state, { payload }) => {
		// 	state.currentCategory = payload;
		// },
	},
	extraReducers: {
		[setCurrentCategory.fulfilled]: (state, { payload }) => {
			state.currentCategory = payload;
		},
		[setCurrentCategory.rejected]: (state, { payload }) => {
			// state.carts = payload;
			// localStorageService.setCartLocal(state);
		},
		[getCategoryList.pending]: (state, { payload }) => {
			state.categoryList = [];
			state.currentCategory = {};
		},
		[getCategoryList.fulfilled]: (state, { payload }) => {
			state.categoryList = payload;
		},
		[getCategoryList.rejected]: (state, { payload }) => {
			// state.carts = payload;
			// localStorageService.setCartLocal(state);
		},
		// get timeslot info
		// builder.addCase(getCategoryList.pending, (state) => ({
		// 	...state,
		// 	categoryList: [],
		// }));
		// builder.addCase(getCategoryList.fulfilled, (state, { payload }) => ({
		// 	...state,
		// 	categoryList: payload,
		// }));
		// builder.addCase(getCategoryList.rejected, (state) => ({
		// 	...state,
		// }));
	},
});
const { reducer, actions } = categorySlice;
export const {} = actions;
export default reducer;
