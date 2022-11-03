import React from 'react';
import { vndCurrencyFormat } from '../../../util/currency.util';
export default function CartItem({ cart = {}, handleChangeQuantity = () => {} }) {
	return (
		<div className={`cart-item`}>
			<div className='cart-image'>
				<img src={cart?.product.image} alt='' />
			</div>
			<div className='cart-quantity'>
				<span
					onClick={() => {
						handleChangeQuantity(cart);
					}}>
					{cart?.quantity}x
				</span>
			</div>
			<div className='cart-info'>
				<span className='cart-name'>{cart?.product.productName}</span>

				<span
					className='cart-change'
					onClick={() => {
						handleChangeQuantity(cart);
					}}>
					Chỉnh sửa
				</span>
			</div>
			<div className='price-cost'>
				<span className=''>{vndCurrencyFormat(cart?.product.price)}</span>
			</div>
		</div>
	);
}
