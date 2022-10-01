import React from 'react';
import Payment from '../Payment/Payment';
import './Checkout.scss';
export default function Checkout({ fees }) {
	return (
		<div className='checkout'>
			<Payment fees={fees}></Payment>
			<span className='checkout-button'>Đặt hàng ngay</span>
		</div>
	);
}
