import React from 'react';
import { vndCurrencyFormat } from '../../../util/currency.util';
import './ProductInOrder.scss';
export default function ProductInOrder({ product = {} }) {
	return (
		<div className='productInOrder-item'>
			<div className='productInOrder-image'>
				<img src={product?.image} alt='' />
			</div>
			<div className='productInOrder-quantity'>
				<span>{product?.quantity}x</span>
			</div>
			<div className='productInOrder-info'>
				<span className='productInOrder-name'>{product?.name}</span>
			</div>
			<div className='productInOrder-price'>
				<span className=''>{vndCurrencyFormat(product?.price)}</span>
			</div>
		</div>
	);
}
