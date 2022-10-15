import React from 'react';
import './Homepage.scss';
import ProductCategory from './ProductCategory';
import ProductList from '../../components/Product/ProductList/ProductList';
import MenuCategory from './MenuCategory';
import HomeContainer from './HomeContainer';
import TimeOrderBar from './TimeOrderBar';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import { ProductByCategory } from '../../util/data';
import GoogleLoginBtn from "../../components/GoogleLoginBtn/GoogleLoginBtn"
export default function HomePage() {
	
	return (
		<>
			<Container maxWidth='lg'>
				<GoogleLoginBtn></GoogleLoginBtn>
				<div className='home'>
					<HomeContainer />
					<TimeOrderBar />
					<MenuCategory />
					{/* <div className='listProductByCategory'>
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
					</div> */}
					<div className='listProductByCategory'>
						<div className='titleListCategory'>
							<p>Ưu đãi hấp dẫn</p>
							<p className='underline-content'></p>
						</div>
						<ProductList products={ProductByCategory} />
						<div className='btViewAllByCategory'>
							<button type='button' className='styleButton'>
								Xem thêm
							</button>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
