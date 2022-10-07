import React from 'react';
import './Homepage.scss';
import ProductCategory from './ProductCategory';
import MenuCategory from './MenuCategory';
import HomeContainer from './HomeContainer';
import TimeOrderBar from './TimeOrderBar';

export default function HomePage() {
	return (
		<>
			<div className='home'>
				<HomeContainer />
				<TimeOrderBar />
				<MenuCategory />
				<div className='listProductByCategory'>
					<div className='titleListCategory'>
						<p>Ưu đãi hấp dẫn</p>
						<p className='underline-content'></p>
					</div>
					<ProductCategory />
					<div className='btViewAllByCategory'>
						<button type='button' className='styleButton'>
							Xem thêm
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
