import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authService from '../service/authService';


const initialState = {
	accessToken: '',
	user: {},
	loginLoading:false,
}


// async action
const loginWithGoogle = createAsyncThunk(
	'auth/loginWithGoogle',
	async (token) => { 
	  const result = await authService.login(token);
	  console.log(result);
	  return result;
	},
  );

// normal action
const logout = createAction('authSlice/logout', () => {
	// apiAuth.logout();
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
	
	 
		
	  },
});
const { reducer, actions } = authSlice;
export const {} = actions;
export default reducer;
export {
	loginWithGoogle
}
