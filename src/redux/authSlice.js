import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// async action
export const login = createAsyncThunk('authSlice/login', async (loginData, thunkAPI) => {
    try {
        // 1.call api
        // 2.save to localStorage
        // 3.return as payload to update state

        const result = {};

        // save to localStorage
        // localStorageService.setUserLocal({
        //     accessToken: result.data.token,
        //     user: result.data.user,
        // });
        return {
            accessToken: result?.data?.accessToken,
            user: result?.data?.user,
        };
    } catch (error) {
        // console.log(error.response.data.message);
        return thunkAPI.rejectWithValue();
    }
});

// normal action
const logout = createAction('authSlice/dangXuat', () => {
    // apiAuth.logout();
    return {
        payload: {},
    };
});

const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        accessToken: '',
        user: {},
    },
    reducers: {
        logout: (state, { payload }) => {
            state.accessToken = '';
            state.user = {};
        },
    },
    extraReducers: {
        // for async action
        [login.pending]: (state, { payload }) => {
            state.user = {};
            state.accessToken = '';
        },
        [login.fulfilled]: (state, { payload }) => {
            let { accessToken } = payload;
            // state.user = user.user;
            state.accessToken = accessToken;
        },
        [login.rejected]: (state, { payload }) => {},
    },
});
const { reducer, actions } = authSlice;
export const {} = actions;
export default reducer;
