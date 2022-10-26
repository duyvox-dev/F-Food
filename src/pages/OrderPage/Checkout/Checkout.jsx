import React from 'react';
import Payment from '../Payment/Payment';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import './Checkout.scss';
import { useDispatch, useSelector } from 'react-redux';
const CheckoutButton = styled(Button)({
	display: 'block',
	color: 'white',
	backgroundColor: 'rgba(243, 101, 34)',
	width: '100%',
	marginTop: '1rem',
	boxShadow: 'inherit',
	'&:hover': { backgroundColor: 'rgba(243, 101, 34)' },
});
export default function Checkout({ fees = {}, totalAmount = 0, placeOrder = () => {} }) {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);
	return (
		<div className='checkout'>
			<Payment fees={fees} totalAmount={totalAmount}></Payment>
			<CheckoutButton
				size='large'
				variant='contained'
				onClick={() => {
					placeOrder();
				}}>
				Đặt hàng
			</CheckoutButton>
		</div>
	);
}
