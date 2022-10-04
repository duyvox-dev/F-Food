import React from 'react';
import './Payment.scss';
export default function Payment({ fees = {}, cartList = [] }) {
	const calculateProductQuantity = () => {
		let totalProduct = 0;
		cartList.forEach((cart) => {
			if (cart?.status == 'available') {
				totalProduct += cart.quantity;
			}
		});
		return totalProduct;
	};
	return (
		<div className='payment'>
			<h3 className='heading-title payment-heading'>Tổng ({calculateProductQuantity()} mặt hàng)</h3>
			<div className='price-cost'>
				{fees?.discountCost?.cost === fees?.originCost?.cost ? (
					<>
						<span className=''>
							{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
								fees?.originCost.cost + fees?.shippingCost.cost
							)}
						</span>
					</>
				) : (
					<>
						<span className=' dash'>
							{' '}
							{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
								fees?.originCost.cost + +fees?.shippingCost.cost
							)}
						</span>
						<span className=''>
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
