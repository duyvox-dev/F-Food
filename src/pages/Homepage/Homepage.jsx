import React, { useEffect } from 'react';
import './Homepage.scss';
import ProductCategory from './ProductCategory';
import ProductList from '../../components/Product/ProductList/ProductList';
import MenuCategory from './MenuCategory';
import HomeContainer from './HomeContainer';
import TimeOrderBar from './TimeOrderBar';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { ProductByCategory } from '../../util/data';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../redux/product';

export default function HomePage() {
	const dispatch = useDispatch();
	const { products } = useSelector((state) => state.product)
	useEffect(() => {
		console.log(products)
	}, [products])
	useEffect(() => {
		dispatch(getAllProduct())
	}, [])
	return (
		<>
			<Container maxWidth='lg'>
				<div className='home'>
					<HomeContainer products={products} />
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
						<ProductList products={products} />
						<div className='btViewAllByCategory'>
							<button type='button' className='styleButton'>
								Xem thêm
							</button>
						</div>
						<div className='iconShoppingCart'>
							<div className='icon-cart'><ShoppingCartOutlinedIcon className='cart' /></div>
							<div className='cart_content'>
								<p>2 </p>
							</div>
						</div>
					</div>

				</div>

			</Container>
		</>
	);
}
