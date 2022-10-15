import React from 'react';
import GoogleIcon from '../../assets/icons/google-icon.png';
import { Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import httpClient from '../../api/httpClient';
import apiLinks from '../../util/apiLink';
import {loginWithGoogle} from'../../redux/authSlice'
import { useDispatch } from 'react-redux';

const StyledButton = styled(Button)({
	background: 'white',
	color: 'black',
});




export default function GoogleLoginBtn() {
	const dispatch= useDispatch()
	const onSuccess = (res) => {
		// const loginProp = {
		// 	idToken:res.credential
		// }
		// httpClient.post({
		// 	url: apiLinks.customer.login,
		// 	data: loginProp,
		//   });


		  dispatch(loginWithGoogle(res.credential));
	};
	const onError = (res) => {
		console.log(res);
	};

	return (
		<>
			<GoogleOAuthProvider clientId={'336558258554-0kocf8i3i9arsv4ik9h0jc2clft4u36s.apps.googleusercontent.com'}>
				<GoogleLogin onSuccess={onSuccess} onError={onError} locale='VN' cancel_on_tap_outside={false} useOneTap />
			</GoogleOAuthProvider>
		</>
	);
}
