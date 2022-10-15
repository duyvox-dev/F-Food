import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import menuService from '../service/menu';

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
export const getNearestTimeSlot = createAction('menuSlice/getNearestTimeSlot', (timeSlots) => {
    const currentTimeMinus20 = new Date(Date.now() - 220000 * 60)
    const getIsValidDate = (arriveTime, checkoutTime) => {
        const currentDate = `${currentTimeMinus20.getHours()}:${currentTimeMinus20.getMinutes()}:${currentTimeMinus20.getSeconds()}`
        return currentDate < arriveTime && currentDate < checkoutTime;
    }
    let defaultTimeSlot = {

    };
    defaultTimeSlot = timeSlots.find((timeslot) => {
        console.log(timeslot)
        if (getIsValidDate(timeslot.arriveTime, timeslot.checkoutTime))
            return timeslot
    })

    return {
        payload: {
            defaultTimeSlot
        },
    };
});
// normal action
const menuSlice = createSlice({
    name: 'menuSlice',
    initialState: initialState,
    reducers: {
        getNearestTimeSlot(state, { payload }) {
            state.currentTimeSlot = payload;
        },
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

