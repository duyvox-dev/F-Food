import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import menuService from '../service/menu';
import { getIsValidDate } from '../util/time.util';
const initialState = {
    accessToken: '',
    getTimeSlotRespone: {},
    currentTimeSlot: {
    },
    getAllProductLoading: false,
}
// async action
export const getListTimeSlot = createAsyncThunk(
    'auth/getListTimeSlot',
    async (data, thunkAPI) => {
        try {
            const res = await menuService.getListTimeSlot();
            return res.results;
        } catch (error) {
            // message.error(error.response.data.message);
            return thunkAPI.rejectWithValue();
        }

    },
);

// normal action
const menuSlice = createSlice({
    name: 'menuSlice',
    initialState: initialState,
    reducers: {

        updateCurrentTimeSlot(state, { payload }) {
            state.currentTimeSlot = payload;
        }
    },
    extraReducers: (builder) => {
        // get timeslot info
        builder.addCase(getListTimeSlot.pending, (state) => ({
            ...state,
            getAllProductLoading: true,
        }));
        builder.addCase(getListTimeSlot.fulfilled, (state, { payload }) => ({
            ...state,
            getTimeSlotRespone: payload,
            getAllProductLoading: false,
        }));
        builder.addCase(getListTimeSlot.rejected, (state) => ({
            ...state,
            getAllProductLoading: false,
        }));

    },
});
const { reducer, actions } = menuSlice;
export const { updateCurrentTimeSlot } = actions;
export default reducer;

