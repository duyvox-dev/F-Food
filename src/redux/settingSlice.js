import settingService from '../service/settingService';
import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setSuccessMessage } from './messageSlice';
// async action
const initialState = {
	timeSlotList: [],
	currentTimeSlot: {},
	dayString: 'hôm nay',
	roomList: [],
	currentRoom: {},
};
export const getListTimeSlot = createAsyncThunk('setting/getListTimeSlot', async (data, thunkAPI) => {
	try {
		const res = await settingService.getListTimeSlot();
		return res.data.results;
	} catch (error) {
		// message.error(error.response.data.message);
		return thunkAPI.rejectWithValue();
	}
});
// async action
export const updateCurrentTimeSlot = createAsyncThunk('setting/updateCurrentTimeSlot', async (data, thunkAPI) => {
	try {
		thunkAPI.dispatch(setSuccessMessage('Đổi khung giờ giao hàng thành công.'));
		return data;
	} catch (error) {
		// message.error(error.response.data.message);
		return thunkAPI.rejectWithValue();
	}
});
export const getRoomList = createAsyncThunk('setting/getRoomList', async (data, thunkAPI) => {
	try {
		const res = await settingService.getRoomList();
		return res.data;
	} catch (error) {
		// message.error(error.response.data.message);
		return thunkAPI.rejectWithValue();
	}
});
const settingSlice = createSlice({
	name: 'settingSlice',
	initialState: initialState,
	reducers: {
		setDayString(state, { payload }) {
			state.dayString = payload;
		},
		setCurrentRoom(state, { payload }) {
			state.currentRoom = payload;
		},
	},
	extraReducers: {
		[getListTimeSlot.pending]: (state) => {
			state.timeSlotList = [];
			state.currentTimeSlot = {};
		},
		[getListTimeSlot.fulfilled]: (state, { payload }) => {
			state.timeSlotList = payload;
		},
		[getListTimeSlot.rejected]: (state) => {},
		[getRoomList.pending]: (state) => {
			state.roomList = [];
		},
		[getRoomList.fulfilled]: (state, { payload }) => {
			state.roomList = payload;
		},
		[getRoomList.rejected]: (state) => {},
		[updateCurrentTimeSlot.fulfilled]: (state, { payload }) => {
			state.currentTimeSlot = payload;
		},
	},
});
const { reducer, actions } = settingSlice;
export const { setDayString, setCurrentRoom } = actions;
export default reducer;
