import React from 'react';
import { vndCurrencyFormat } from '../../../util/currency.util';
import './Payment.scss';
export default function Payment({ fees = {}, totalAmount = 0 }) {

	return (
		<div className='payment'>
			<h3 className='heading-title payment-heading'>Tổng ({totalAmount}) mặt hàng : </h3>
			<div className='price-cost'>
				{fees?.discountCost?.cost === fees?.originCost?.cost ? (
					<>
						<span className=''>{vndCurrencyFormat(fees?.originCost.cost + fees?.shippingCost.cost)}</span>
					</>
				) : (
					<>
						<span className=' dash'>{vndCurrencyFormat(fees?.originCost.cost + +fees?.shippingCost.cost)}</span>
						<span className=''>{vndCurrencyFormat(fees?.discountCost.cost + +fees?.shippingCost.cost)}</span>
					</>
				)}
			</div>
		</div>
	);
}
