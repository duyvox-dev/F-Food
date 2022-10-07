import React from 'react';
import './ProductItem.scss';
import { vndCurrencyFormat, discountPercent } from '../../../util/currency.util';
import { AddRounded } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';

import { styled } from '@mui/material/styles';

import { Link } from 'react-router-dom';
const AddToCartButton = styled(IconButton)({
	// display: 'flex',
	color: 'white',
	backgroundColor: 'rgba(243, 101, 34)',
	width: '25px',
	height: '25px',
	padding: 0,
	fontSize: '17px',
	// justifyContent: 'center',
	// alignItems: 'center',
	// boxShadow: 'inherit',
	// borderRadius: '999px',
	'&:hover': { backgroundColor: 'rgba(243, 101, 34)' },
});
const ProductItem = ({ product }) => {
	return (
		<Link to={`/detail/${product?.id}`} className='product'>
			<img src={product?.image} alt='' className='product-image' />
			<div className='product-info'>
				<p className='product-name'>{product?.productName}</p>
				{product?.productNewPrice && product?.productNewPrice !== 0 && (
					<div className='product-price-discount'>
						<p className='product-price'>{vndCurrencyFormat(product?.productOldPrice)}</p>
						<p className='discount-percent'>-{discountPercent(product?.productNewPrice, product?.productOldPrice)}%</p>
					</div>
				)}
				<div className='product-bottom'>
					<p className='product-price'>{vndCurrencyFormat(product?.productNewPrice)}</p>
					{/* <div className='addToCart'>
						<AddRounded />
					</div> */}
					<AddToCartButton>
						<AddRounded />
					</AddToCartButton>
				</div>
			</div>
		</Link>
	);
};

export default ProductItem;
