import React from 'react';

export default function CartItem({ cart = {} }) {
	return (
		<div className={`cart-item ${cart?.status == 'available' ? '' : 'cart-outstock'}`}>
			<div className='cart-image'>
				<img src={cart?.image} alt='' />
			</div>
			<div className='cart-quantity'>
				<span>{cart?.quantity}x</span>
			</div>
			<div className='cart-info'>
				<span className='cart-name'>{cart?.name}</span>
				{cart?.status !== 'available' && <span className='cart-outstock-message'>Sản phẩm đã bán hết</span>}
				<span className='cart-change'>Chỉnh sửa</span>
			</div>
			<span className='cart-price'>
				{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cart?.price)}
			</span>
		</div>
	);
}
