import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import menuService from '../service/menu';
const initialState = {
	menuList: [],
};

export const getMenuList = createAsyncThunk('menu/getMenuList', async (data, thunkAPI) => {
	try {
		const { setting } = thunkAPI.getState();
		const { currentTimeSlot } = setting;
		const res = await menuService.getMenuList(currentTimeSlot.id);
		return res.data.results;
	} catch (error) {
		// message.error(error.response.data.message);
		return thunkAPI.rejectWithValue();
	}
});

// normal action
const menuSlice = createSlice({
	name: 'menuSlice',
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		// get menu info
		builder.addCase(getMenuList.pending, (state) => ({
			...state,
			menuList: [],
		}));
		builder.addCase(getMenuList.fulfilled, (state, { payload }) => ({
			...state,
			menuList: payload,
		}));
		builder.addCase(getMenuList.rejected, (state) => ({
			...state,
		}));
	},
});
const { reducer, actions } = menuSlice;
export const {} = actions;
export default reducer;
