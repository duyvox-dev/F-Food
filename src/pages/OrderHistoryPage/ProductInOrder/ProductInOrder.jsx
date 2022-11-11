import React from 'react';
import { vndCurrencyFormat } from '../../../util/currency.util';
import './ProductInOrder.scss';
export default function ProductInOrder({ product = {} }) {
	return (
		<div className='productInOrder-item'>
			<div className='productInOrder-image'>
				<img
					src={
						product.image
							? product.image
							: 'https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000'
					}
					alt=''
				/>
			</div>
			<div className='productInOrder-quantity'>
				<span>{product?.quantity}x</span>
			</div>
			<div className='productInOrder-info'>
				<span className='productInOrder-name'>{product?.productName}</span>
			</div>
			<div className='productInOrder-price'>
				<span className=''>{vndCurrencyFormat(product?.finalAmount)}</span>
			</div>
		</div>
	);
}
