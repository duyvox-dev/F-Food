import React from 'react';
import { AddRounded } from '@mui/icons-material';
// import { Grid, Typography } from '@mui/material';
// import { Grid, Paper, Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material';
// import { Box } from '@mui/system';
import './Homepage.scss';
import Delivery from '../../img/delivery.png';
import HeroBg from '../../img/heroBg.png';
import { hotMenuData } from '../../util/data';
import { MenuCategory } from '../../util/data';
import { ProductByCategory } from '../../util/data';
import Quyt from '../../img/quyt.png';

export default function HomePage() {
	return (
		<>
			<div className='home'>
				<div className='homeContainer'>
					<div className='bannerName'>
						<div className='banner-tittle'>
							<p className='header-title'>Delivery</p>
							<div className='imageDelivery'>
								<img src={Delivery} className='pictureDeli' alt='delivery' />
							</div>
						</div>
						<p className='content-title'>
							The Fastest Delivery in
							<span className='sub-content'> Your University</span>
						</p>
					</div>
					<div className='hotMenu'>
						<img src={HeroBg} className='image-background' alt='hero-bg' />

						<div className='menu-items'>
							{hotMenuData &&
								hotMenuData.map((n) => (
									<div key={n.id} className='content-items'>
										<img src={n.image} alt='quyt' className='image-hot-items' />
										<div className='contentProduct'>
											<p className='productName'>{n.productName}</p>
											<div className='price-discount'>
												<p className='productPrice'>
													{n.productNewPrice} <span className='unitPrice'>đ</span>
												</p>
												<p className='discount'>-14%</p>
											</div>
											<div className='bottom'>
												<p className='productOldPrice'>
													{n.productOldPrice} <span className='unitPrice'>đ</span>
												</p>
												<div className='addToCart'>
													<AddRounded />
												</div>
											</div>
										</div>
									</div>
								))}
						</div>
					</div>
				</div>
				<div className='timeOrderBar'>
					<div className='titleOrder'>
						<p>Chọn khung giờ đặt hàng cho hôm nay</p>
					</div>
					<div className='timeOrder'>
						<button type='button' className='btChooseTime disable'>
							9:45 - 12:00
						</button>
						<button type='button' className='btChooseTime active'>
							9:45 - 12:00
						</button>
						<button type='button' className='btChooseTime'>
							9:45 - 12:00
						</button>
						<button type='button' className='btChooseTime'>
							9:45 - 12:00
						</button>
					</div>
				</div>
				<div className='menuCategory'>
					<div className='titleCategory'>
						<p>Danh mục</p>
					</div>
					<div className='contentCategory'>
						{MenuCategory &&
							MenuCategory.map((n) => (
								<div key={n.id} className='itemsCategory'>
									<img src={n.image} alt='uu dai' className='image-category' />
									<p className='name-category'>{n.name}</p>
								</div>
							))}
					</div>
				</div>
				<div className='listProductByCategory'>
					<div className='titleListCategory'>
						<p>Ưu đãi hấp dẫn</p>
						<p className='underline-content'></p>
					</div>
					<div className='productContainer'>
						{ProductByCategory &&
							ProductByCategory.map((n) => (
								<div key={n.id} className='product-content'>
									<img src={n.image} alt='quyt' className='image-products' />
									<div className='content-item'>
										<p className='name-item'>{n.productName}</p>
										<div className='price-item-discount'>
											<p className='item-price'>
												{n.productNewPrice} <span className='unit-item-price'>đ</span>
											</p>
											<p className='discount-item'>-50%</p>
										</div>
										<div className='bottom-item'>
											<p className='itemOldPrice'>
												{n.productOldPrice} <span className='unit-item-price'>đ</span>
											</p>
											<div className='addItemToCart'>
												<AddRounded />
											</div>
										</div>
									</div>
								</div>
							))}
					</div>
					<div className='btViewAllByCategory'>
						<button type='button' className='styleButton'>
							Xem thêm
						</button>
					</div>
				</div>
				<div className='listProductByCategory'>
					<div className='titleListCategory'>
						<p>đồ uống</p>
						<p className='underline-content'></p>
					</div>
				</div>
			</div>
		</>
	);
}
