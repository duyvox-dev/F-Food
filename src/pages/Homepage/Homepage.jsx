import React, { useEffect } from 'react';
import './Homepage.scss';
// import ProductCategory from './ProductCategory';
import ProductList from '../../components/Product/ProductList/ProductList';
import MenuCategory from './MenuCategory';
import HomeContainer from './HomeContainer';
import TimeOrderBar from './TimeOrderBar';
import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../redux/product';
import CartBtn from '../../components/CartBtn/CartBtn';
import _ from 'lodash';
import MenuList from './MenuList/MenuList';
export default function HomePage() {
	const dispatch = useDispatch();
	const { products } = useSelector((state) => state.product);
	const { currentTimeSlot } = useSelector((state) => state.setting);
	useEffect(() => {
		// console.log(currentTimeSlot);
		if (_.isEmpty(currentTimeSlot) == false) {
			dispatch(getAllProduct(currentTimeSlot));
		}
	}, [currentTimeSlot]);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Container maxWidth='lg' sx={{ position: 'relative' }}>
				<div className='home'>
					<HomeContainer products={products} />
					<TimeOrderBar />
					<MenuList />
					<MenuCategory />

					<div className='listProductByCategory'>
						<div className='titleListCategory'>
							<p>Ưu đãi hấp dẫn</p>
							<p className='underline-content'></p>
						</div>
						<ProductList products={products} />
						{/* <div className='btViewAllByCategory'>
							<button type='button' className='styleButton'>
								Xem thêm
							</button>
						</div> */}
					</div>
				</div>
				<CartBtn></CartBtn>
			</Container>
		</>
	);
}
