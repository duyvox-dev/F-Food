import React from 'react';
import { AddRounded } from '@mui/icons-material';
import './Homepage.scss';
import Delivery from '../../img/delivery.png';
import HeroBg from '../../img/heroBg.png';
import { hotMenuData } from '../../util/data';

function HomeContainer() {
	return (
		<>
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
									<img src={n.image} alt='' className='image-hot-items' />
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
		</>
	);
}

export default HomeContainer;
