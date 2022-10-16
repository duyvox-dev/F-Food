import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authService from '../service/authService';
import { googleLogout } from '@react-oauth/google';

const initialState = {
	accessToken: '',
	user: {},
	loginLoading: false,
}


// async action
const loginWithGoogle = createAsyncThunk(
	'auth/loginWithGoogle',
	async (token) => {
		const result = await authService.login(token);
		return result.data;
	},
);
export const updateUserPhone = createAsyncThunk(
	'auth/updateUserPhone',
	async (data, thunkAPI) => {
		try {
			// console.log(data)
			const res = await authService.updatePhoneNumber(data.user, data.currentPhone);
			console.log(res)
			return res.data.results;
		} catch (error) {
			// message.error(error.response.data.message);
			return thunkAPI.rejectWithValue();
		}

	},
);

// normal action
const logout = createAction('authSlice/logout', () => {
	googleLogout();

	return {
		payload: {},
	};
});

const authSlice = createSlice({
	name: 'authSlice',
	initialState: initialState,
	reducers: {
		logout: (state, { payload }) => {
			state.accessToken = '';
			state.user = {};
		},
	},
	extraReducers: (builder) => {
		// get user info
		builder.addCase(loginWithGoogle.pending, (state) => ({
			...state,
			loginLoading: true,
		}));
		builder.addCase(loginWithGoogle.fulfilled, (state, { payload }) => ({
			...state,
			user: payload,
			loginLoading: false,
		}));
		builder.addCase(loginWithGoogle.rejected, (state) => ({
			...state,
			loginLoading: false,
		}));
		builder.addCase(updateUserPhone.pending, (state) => ({
			...state,
			loginLoading: true,
		}));
		builder.addCase(updateUserPhone.fulfilled, (state, { payload }) => ({
			...state,
			user: payload,
			loginLoading: false,
		}));
		builder.addCase(updateUserPhone.rejected, (state) => ({
			...state,
			loginLoading: false,
		}));

	},
});
const { reducer, actions } = authSlice;
export const { } = actions;
export default reducer;
export {
	loginWithGoogle, logout
}
