import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import menuService from '../service/menu';

const initialState = {
    accessToken: '',
    getTimeSlotRespone: {},
    getAllProductLoading: false,
}
// async action
const getListTimeSlot = createAsyncThunk(
    'auth/getListTimeSlot',
    async () => {
        const result = await menuService.getListTimeSlot();
        console.log(result);
        return result;
    },
);
// normal action
const menuSlice = createSlice({
    name: 'menuSlice',
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        // get user info
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
export const { } = actions;
export default reducer;
export {
    getListTimeSlot,
}
