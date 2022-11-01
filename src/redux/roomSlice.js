import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const mockDataRoom = [
	{
		id: 1,
		label: 'Phòng 202',
	},
	{
		id: 2,
		label: 'Phòng 301',
	},
	{
		id: 3,
		label: 'Phòng 101',
	},
	{
		id: 4,
		label: 'Sảnh trống đồng',
	},
	{
		id: 5,
		label: 'Sân bóng',
	},
	{
		id: 6,
		label: 'Phòng 102',
	},
];
const initialState = {
	roomList: mockDataRoom,
	currentRoom: {},
};
export const getRoomList = createAsyncThunk('room/getRoomList', async (data, thunkAPI) => {
	try {
		// console.log(data);
		// const res = await orderService.createOrder(data);
		// console.log(res);
		return {};
	} catch (error) {
		// message.error(error.response.data.message);
		return thunkAPI.rejectWithValue();
	}
});
// normal action
const roomSlice = createSlice({
	name: 'roomSlice',
	initialState: initialState,
	reducers: {
		changeRoom: (state, { payload }) => {
			state.currentRoom = payload;
		},
	},
	extraReducers: {
		[getRoomList.pending]: (state) => {
			// state.roomList = [];
			// state.currentRoom = {};
		},
		[getRoomList.fulfilled]: (state, { payload }) => {
			// state.roomList = [];
			// state.currentRoom = {};
		},
		[getRoomList.rejected]: (state) => {},
	},
});
const { reducer, actions } = roomSlice;
export const { changeRoom } = actions;
export default reducer;
