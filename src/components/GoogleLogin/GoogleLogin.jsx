import React from 'react';
import GoogleIcon from '../../assets/icons/google-icon.png';
import { Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useGoogleLogin } from '@react-oauth/google';

const StyledButton = styled(Button)({
	background: 'white',
	color: 'black',
});
export default function GoogleLogin() {
	const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
	const onSuccess = (res) => {
		console.log(res);
		// dispatch(loginViaGoogle(res.tokenId));
	};
	const onError = (res) => {
		console.log(res);
	};
	const signIn = useGoogleLogin({
		onSuccess,
		onError,
	});

	return (
		<StyledButton variant='contained' sx={{}} onClick={signIn}>
			<Stack direction='row' spacing={2}>
				<img src={GoogleIcon} alt='' style={{ width: '20px', height: '20px' }} />
				<span>Đăng nhập</span>
			</Stack>
		</StyledButton>
	);
}
