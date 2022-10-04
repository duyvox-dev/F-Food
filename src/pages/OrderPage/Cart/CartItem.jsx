import React from 'react';
import { vndCurrencyFormat } from '../../../util/currency.util';
export default function CartItem({ cart = {}, handleChangeQuantity = () => {} }) {
	return (
		<div className={`cart-item ${cart?.status == 'available' ? '' : 'cart-outstock'}`}>
			<div className='cart-image'>
				<img src={cart?.image} alt='' />
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
				<span className='cart-name'>{cart?.name}</span>
				{cart?.status !== 'available' && <span className='cart-outstock-message'>Sản phẩm đã bán hết</span>}
				<span
					className='cart-change'
					onClick={() => {
						handleChangeQuantity(cart);
					}}>
					Chỉnh sửa
				</span>
			</div>
			<div className='price-cost'>
				{cart?.status == 'available' ? (
					<>
						{cart?.discountPrice ? (
							<>
								<span className=' dash'>{vndCurrencyFormat(cart?.price)}</span>
								<span className=''>{vndCurrencyFormat(cart?.discountPrice)}</span>
							</>
						) : (
							<>
								<span className=''>{vndCurrencyFormat(cart?.price)}</span>
							</>
						)}
					</>
				) : (
					<>
						<span className=''>{vndCurrencyFormat(0)}</span>
					</>
				)}
			</div>
		</div>
	);
}
