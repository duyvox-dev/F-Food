import React from 'react';
import CartItem from './CartItem';
import './Cart.scss';
export default function CartList({ carts = [] }) {
	return (
		<div className='cart order-section'>
			<h3 className='heading-title'>Tóm tắt đơn hàng</h3>
			<div className='cart-list'>
				{carts.map((cart, index) => {
					return <CartItem key={index} cart={cart}></CartItem>;
				})}
			</div>
		</div>
	);
}
