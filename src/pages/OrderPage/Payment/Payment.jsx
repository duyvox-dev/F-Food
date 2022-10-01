import React from 'react';
import './Payment.scss';
export default function Payment({ fees = {} }) {
	return (
		<div className='payment'>
			<h3 className='heading-title payment-heading'>Tổng số tiền</h3>
			<div className='payment-cost'>
				{fees?.discountCost?.cost === fees?.originCost?.cost ? (
					<>
						<span className='payment-cost-origin'>
							{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
								fees?.originCost.cost + fees?.shippingCost.cost
							)}
						</span>
					</>
				) : (
					<>
						<span className='payment-cost-origin dash'>
							{' '}
							{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
								fees?.originCost.cost + +fees?.shippingCost.cost
							)}
						</span>
						<span className='payment-cost-discount'>
							{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
								fees?.discountCost.cost + +fees?.shippingCost.cost
							)}
						</span>
					</>
				)}
			</div>
		</div>
	);
}
