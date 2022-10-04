import React from 'react';
import Payment from '../Payment/Payment';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import './Checkout.scss';
const CheckoutButton = styled(Button)({
	display: 'block',
	color: 'white',
	backgroundColor: 'rgba(243, 101, 34)',
	width: '100%',
	marginTop: '1rem',
	boxShadow: 'inherit',
	'&:hover': { backgroundColor: 'rgba(243, 101, 34)' },
});
export default function Checkout({ fees = {}, cartList = [] }) {
	return (
		<div className='checkout'>
			<Payment fees={fees} cartList={cartList}></Payment>
			<CheckoutButton size='large' variant='contained'>
				Đặt hàng
			</CheckoutButton>
			{/* <span className='checkout-button'>Đặt hàng ngay</span> */}
		</div>
	);
}
