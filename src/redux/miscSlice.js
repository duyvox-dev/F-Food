import { createSlice } from '@reduxjs/toolkit';
const miscSlice = createSlice({
	name: 'misc',
	initialState: {
		loading: false,
		loadingCount: 0,
	},
	reducers: {
		startLoading: (state, action) => {
			state.loading = true;
			state.loadingCount += 1;
		},
		stopLoading: (state, action) => {
			state.loadingCount -= 1;
			if (state.loadingCount == 0) state.loading = false;
		},
	},
});
const { reducer, actions } = miscSlice;
export const { startLoading, stopLoading } = actions;
export default reducer;
