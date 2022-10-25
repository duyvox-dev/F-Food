import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import menuService from '../service/menu';
import { setSuccessMessage } from './messageSlice';
const initialState = {
	getTimeSlotRespone: {},
	currentTimeSlot: {},
	dayString: 'hôm nay',
};
// async action
export const getListTimeSlot = createAsyncThunk('menu/getListTimeSlot', async (data, thunkAPI) => {
	try {
		const res = await menuService.getListTimeSlot();
		return res.data.results;
	} catch (error) {
		// message.error(error.response.data.message);
		return thunkAPI.rejectWithValue();
	}
});
// async action
export const updateCurrentTimeSlot = createAsyncThunk('auth/updateCurrentTimeSlot', async (data, thunkAPI) => {
	try {
		thunkAPI.dispatch(setSuccessMessage('Đổi khung giờ giao hàng thành công.'));
		return data;
	} catch (error) {
		// message.error(error.response.data.message);
		return thunkAPI.rejectWithValue();
	}
});

// normal action
const menuSlice = createSlice({
	name: 'menuSlice',
	initialState: initialState,
	reducers: {
		// updateCurrentTimeSlot(state, { payload }) {
		// 	state.currentTimeSlot = payload;
		// },
		setDayString(state, { payload }) {
			state.dayString = payload;
		},
	},
	extraReducers: (builder) => {
		// get timeslot info
		builder.addCase(getListTimeSlot.pending, (state) => ({
			...state,
		}));
		builder.addCase(getListTimeSlot.fulfilled, (state, { payload }) => ({
			...state,
			getTimeSlotRespone: payload,
		}));
		builder.addCase(getListTimeSlot.rejected, (state) => ({
			...state,
		}));
		builder.addCase(updateCurrentTimeSlot.fulfilled, (state, { payload }) => ({
			...state,
			currentTimeSlot: payload,
		}));
	},
});
const { reducer, actions } = menuSlice;
export const { setDayString } = actions;
export default reducer;
