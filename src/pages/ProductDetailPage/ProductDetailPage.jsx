import React from 'react';
import './ProductDetailPage.scss';
import banhmi from '../../assets/image/banhmi.jpg';

// or
import { Grid, Paper, Card, CardContent, Typography, CardActions, Button, CardMedia, Container } from '@mui/material';
import { Box } from '@mui/system';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import { ORANGE_COLOR } from '../../constansts/constants';
import { useLocation } from 'react-router-dom';
import { discountPercent, vndCurrencyFormat } from '../../util/currency.util';

export default function ProductDetailPage() {
	let vendor = '7Eleven';

	// Prepare for get product Id detail from Homepage
	// const {id} = useParams();
	const data = useLocation();

	console.log('data: ', data);

	// Data mock
	const productsDataMock = [
		{
			id: 1,
			productName: 'Bánh Bò',
			productPrice: 20000,
			image: 'https://cdn.beptruong.edu.vn/wp-content/uploads/2013/09/banh-bo-men-ruou.jpg',
		},
		{
			id: 2,
			productName: 'Bánh Bao',
			productPrice: 20000,
			image: 'https://brandpartner.vn/wp-content/uploads/2020/06/B%C3%A1nh-Bao.jpg',
		},
		{
			id: 3,
			productName: 'Bánh Giò',
			productPrice: 15000,
			image: 'https://cdn.daylambanh.edu.vn/wp-content/uploads/2022/02/cach-lam-banh-gio.jpg',
		},
		{
			id: 4,
			productName: 'Bánh Sandwich',
			productPrice: 15000,
			image: 'https://monngonmoingay.com/wp-content/uploads/2020/12/sandwich-kep-cha-tom-880.webp',
		},
		{
			id: 5,
			productName: 'Bánh Bông Lan',
			productPrice: 15000,
			image: 'https://cdn.tgdd.vn/2020/11/CookProduct/thumb-1200x676-2.jpg',
		},
	];

	return (
		<>
			<Container maxWidth='md'>
				<div className='product-image'>
					<img src={data.state.image} alt='' />
				</div>
				<div className='product-detail'>
					<h1 className='product-name'>{data.state.productName}</h1>
					<div className='line'></div>
					<div className='product-price'>
						<span className='price'>{vndCurrencyFormat(data.state.productNewPrice)} </span>
						<span className='price-sale'>{vndCurrencyFormat(data.state.productOldPrice)} </span>
						<span className='price-tag-sale'>
							{-discountPercent(data.state.productNewPrice, data.state.productOldPrice)} %
						</span>
					</div>
				</div>

				<button className='btn-add-product'>Thêm</button>

				<div className='product-vendor'>
					<p>
						Đơn hàng đang được xử lý bởi <span className='vendor-name'> {vendor}</span>
					</p>
				</div>

				{/* Product Components */}

				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={2} columns={16}>
						{productsDataMock.map((product, key) => (
							<Grid item xs={4} key={key}>
								<Card variant='outlined'>
									<CardContent>
										<CardMedia component='img' alt='product img' height='140' src={product.image} />
										<Typography gutterBottom variant='h5' component='div' fontWeight={700}>
											{product.productName}
										</Typography>
										<div style={{ display: 'flex', justifyContent: 'space-between' }}>
											<Typography variant='h6' component='div' fontWeight={500}>
												{product.productPrice} đ
											</Typography>

											<Button size='small'>
												<AddCircleIcon sx={{ color: ORANGE_COLOR }} />
											</Button>
										</div>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				</Box>
			</Container>
		</>
	);
}
