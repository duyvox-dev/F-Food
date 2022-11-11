import React from 'react';
import { AddRounded } from '@mui/icons-material';
import './Homepage.scss';
import Delivery from '../../img/delivery.png';
import HeroBg from '../../img/heroBg.png';
import { hotMenuData } from '../../util/data';

import ProductItem from '../../components/Product/ProductItem/ProductItem';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

function HomeContainer({ products = [] }) {
	return (
		<>
			<div className='homeContainer'>
				<div className='bannerName'>
					<div className='banner-tittle'>
						<p className='header-title'>Giao hàng</p>
						<div className='imageDelivery'>
							<img src={Delivery} className='pictureDeli' alt='delivery' />
						</div>
					</div>
					<p className='content-title'>
						Đặt hàng giao ngay
						<span className='sub-content' style={{ display: 'block' }}>
							{' '}
							không phải xếp hàng
						</span>
					</p>
				</div>
				<div className='hotMenu'>
					<img src={HeroBg} className='image-background' alt='hero-bg' />

					<div className='menu-items'>
						<Grid2 container spacing={2} justifyContent='center'>
							{products &&
								products.slice(0, 4).map((product, index) => {
									return (
										<Grid2 item xs={5} key={index}>
											<ProductItem product={product}></ProductItem>
										</Grid2>
									);
								})}
						</Grid2>
					</div>
				</div>
			</div>
		</>
	);
}

export default HomeContainer;
