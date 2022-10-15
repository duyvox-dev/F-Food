import React from 'react';
import './ProductDetailPage.scss';
import banhmi from '../../assets/image/banhmi.jpg';

// or
import { Grid, Paper, Card, CardContent, Typography, CardActions, CardMedia, Container } from '@mui/material';
import { Box } from '@mui/system';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import { ORANGE_COLOR } from '../../constansts/constants';
import { useLocation, useParams } from 'react-router-dom';
import { discountPercent, vndCurrencyFormat } from '../../util/currency.util';
import { ProductByCategory } from '../../util/data';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ProductList from '../../components/Product/ProductList/ProductList';
const AddToCartButton = styled(Button)({
	display: 'block',
	color: 'white',
	backgroundColor: 'rgba(243, 101, 34)',
	marginTop: '1rem',
	padding: '0.5rem 3rem',
	'&:hover': { backgroundColor: 'rgba(243, 101, 34)' },
});
export default function ProductDetailPage() {
	let vendor = '7Eleven';

	// Prepare for get product Id detail from Homepage
	const { id } = useParams();
	const [currProduct, setCurrProduct] = useState({});
	// const data = useLocation();

	// console.log('data: ', data);

	// Data mock
	// const productsDataMock = [
	// 	{
	// 		id: 1,
	// 		productName: 'Bánh Bò',
	// 		productPrice: 20000,
	// 		image: 'https://cdn.beptruong.edu.vn/wp-content/uploads/2013/09/banh-bo-men-ruou.jpg',
	// 	},
	// 	{
	// 		id: 2,
	// 		productName: 'Bánh Bao',
	// 		productPrice: 20000,
	// 		image: 'https://brandpartner.vn/wp-content/uploads/2020/06/B%C3%A1nh-Bao.jpg',
	// 	},
	// 	{
	// 		id: 3,
	// 		productName: 'Bánh Giò',
	// 		productPrice: 15000,
	// 		image: 'https://cdn.daylambanh.edu.vn/wp-content/uploads/2022/02/cach-lam-banh-gio.jpg',
	// 	},
	// 	{
	// 		id: 4,
	// 		productName: 'Bánh Sandwich',
	// 		productPrice: 15000,
	// 		image: 'https://monngonmoingay.com/wp-content/uploads/2020/12/sandwich-kep-cha-tom-880.webp',
	// 	},
	// 	{
	// 		id: 5,
	// 		productName: 'Bánh Bông Lan',
	// 		productPrice: 15000,
	// 		image: 'https://cdn.tgdd.vn/2020/11/CookProduct/thumb-1200x676-2.jpg',
	// 	},
	// ];
	useEffect(() => {
		window.scrollTo(0, 0);
		const product = ProductByCategory.find((product) => product.id == id);
		setCurrProduct(product);
	}, [id]);
	return (
		<>
			<Container maxWidth='lg'>
				<div className='product-detail-image'>
					<img src={currProduct?.image} alt='' />
				</div>
				<div className='product-detail-detail'>
					<h1 className='product-detail-name'>{currProduct?.productName}</h1>
					<div className='line'></div>
					<div className='product-detail-price'>
						<span className='price'>{vndCurrencyFormat(currProduct?.productNewPrice)} </span>
						<span className='price-sale'>{vndCurrencyFormat(currProduct?.productOldPrice)} </span>
						<span className='price-tag-sale'>
							{-discountPercent(currProduct?.productNewPrice, currProduct?.productOldPrice)} %
						</span>
					</div>
				</div>

				<AddToCartButton onClick={() => { }} size='large'>
					Thêm
				</AddToCartButton>

				<div className='product-detail-vendor'>
					<p>
						Đơn hàng đang được xử lý bởi <span className='vendor-name'> {vendor}</span>
					</p>
				</div>

				{/* Product Components */}
				<div>
					<ProductList products={ProductByCategory}></ProductList>
				</div>
			</Container>
		</>
	);
}
