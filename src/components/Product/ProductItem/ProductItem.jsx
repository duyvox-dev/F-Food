import React from 'react';
import './ProductItem.scss';
import { vndCurrencyFormat, discountPercent } from '../../../util/currency.util';
import { AddRounded } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';

import { styled } from '@mui/material/styles';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cartSlice';
const AddToCartButton = styled(IconButton)({
	// display: 'flex',
	color: 'white',
	backgroundColor: 'rgba(243, 101, 34)',
	width: '25px',
	height: '25px',
	padding: 0,
	fontSize: '17px',
	position: 'absolute',
	right: '1rem',
	bottom: '1rem',
	zIndex: '99',
	'&:hover': { backgroundColor: 'rgba(243, 101, 34)' },
});
const ProductItem = ({ product }) => {
	const dispatch = useDispatch();
	return (
		<Link to={`/detail/${product?.id}`} className='product'>
			<img src={product?.image} alt='' className='product-image' />
			<div className='product-info'>
				<p className='product-name'>{product?.name}</p>

				<div className='product-bottom'>
					<p className='product-price'>{vndCurrencyFormat(product?.price)}</p>
					{/* <div className='addToCart'>
						<AddRounded />
					</div> */}
					<AddToCartButton
						onClick={() => {
							dispatch(addToCart(product));
						}}>
						<AddRounded />
					</AddToCartButton>
				</div>
			</div>
		</Link>
	);
};

export default ProductItem;
