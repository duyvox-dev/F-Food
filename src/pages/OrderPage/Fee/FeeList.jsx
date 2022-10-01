import React from 'react';
import './Fee.scss';
import FeeItem from './FeeItem';
export default function FeeList({ fees = {} }) {
	return (
		<div className='fee'>
			<h3 className='heading-title fee-heading'>Thanh toán</h3>
			<div className='fee-list'>
				<FeeItem fee={fees?.originCost}></FeeItem>
				<FeeItem fee={fees?.discountCost}></FeeItem>
				<FeeItem fee={fees?.shippingCost}></FeeItem>
			</div>
		</div>
	);
}
