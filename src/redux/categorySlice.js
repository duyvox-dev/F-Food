import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import menuService from '../service/categoryService';

const initialState = {
    categoryList: [],
}
// async action
export const getCategoryList = createAsyncThunk(
    'category/getCategoryList',
    async (data, thunkAPI) => {
        try {
            const res = await menuService.getAllCategory();
            return res.results;
        } catch (error) {
            // message.error(error.response.data.message);
            return thunkAPI.rejectWithValue();
        }

    },
);

const categorySlice = createSlice({
    name: 'categorySlice',
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        // get timeslot info
        builder.addCase(getCategoryList.pending, (state) => ({
            ...state,
            categoryList: [],
        }));
        builder.addCase(getCategoryList.fulfilled, (state, { payload }) => ({
            ...state,
            categoryList: payload,
        }));
        builder.addCase(getCategoryList.rejected, (state) => ({
            ...state,
        }));

    },
});
const { reducer, actions } = categorySlice;
export const { } = actions;
export default reducer;

