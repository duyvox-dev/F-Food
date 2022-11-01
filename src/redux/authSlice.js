import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authService from '../service/authService';
import { googleLogout } from '@react-oauth/google';
import { setSuccessMessage } from './messageSlice';
const initialState = {
	accessToken: '',
	user: {},
	loginLoading: false,
	updateUserInfoSuccess: false,
};

// async action
const loginWithGoogle = createAsyncThunk('auth/loginWithGoogle', async (token, thunkAPI) => {
	try {
		const result = await authService.login(token);
		thunkAPI.dispatch(setSuccessMessage('Đăng nhập thành công.'));

		return result.data;
	} catch (error) {
		// message.error(error.response.data.message);
		return thunkAPI.rejectWithValue();
	}
});
export const updateUserPhone = createAsyncThunk('auth/updateUserPhone', async (data, thunkAPI) => {
	try {
		// console.log(data)
		const res = await authService.updatePhoneNumber(data.user, data.currentPhone);
		console.log(res);
		thunkAPI.dispatch(setSuccessMessage('Cập nhật thông tin cá nhân thành công.'));
		return res.data;
	} catch (error) {
		// message.error(error.response.data.message);
		return thunkAPI.rejectWithValue();
	}
});

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
		setUpdateUserInfoSuccess: (state, { payload }) => {
			state.updateUserInfoSuccess = payload;
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
			updateUserInfoSuccess: false,
			loginLoading: true,
		}));
		builder.addCase(updateUserPhone.fulfilled, (state, { payload }) => ({
			...state,
			user: payload,
			updateUserInfoSuccess: true,

			loginLoading: false,
		}));
		builder.addCase(updateUserPhone.rejected, (state) => ({
			...state,
			loginLoading: false,
		}));
	},
});
const { reducer, actions } = authSlice;
export const { setUpdateUserInfoSuccess } = actions;
export default reducer;
export { loginWithGoogle, logout };
