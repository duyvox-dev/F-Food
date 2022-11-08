import React from 'react';
import './ProductDetailPage.scss';
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { vndCurrencyFormat } from '../../util/currency.util';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ProductList from '../../components/Product/ProductList/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { getProductByMenu, getProductDetail } from '../../redux/product';
import CartBtn from '../../components/CartBtn/CartBtn';
import { addToCart } from '../../redux/cartSlice';
import _ from 'lodash';
const AddToCartButton = styled(Button)({
	display: 'block',
	color: 'white',
	backgroundColor: 'rgba(243, 101, 34)',
	marginTop: '1rem',
	padding: '0.5rem 3rem',
	'&:hover': { backgroundColor: 'rgba(243, 101, 34)' },
});
export default function ProductDetailPage() {
	// Prepare for get product Id detail from Homepage
	const { id } = useParams();
	const dispatch = useDispatch();
	const { currentProduct, productInMenu } = useSelector((state) => state.product);
	// const data = useLocation();

	// console.log('data: ', data);

	useEffect(() => {
		window.scrollTo(0, 0);
		// console.log(id);
		dispatch(getProductDetail(id));
	}, [id]);
	useEffect(() => {
		if (_.isEmpty(currentProduct) == false) dispatch(getProductByMenu(currentProduct.menuId));
	}, [currentProduct]);
	return (
		<>
			<Container maxWidth='lg' sx={{ position: 'relative' }}>
				<div className='product-detail-image'>
					<img src={currentProduct?.image} alt='' />
				</div>
				<div className='product-detail-detail'>
					<h1 className='product-detail-name'>{currentProduct?.productName}</h1>
					<div className='line'></div>
					<div className='product-detail-price'>
						<span className='price'>{vndCurrencyFormat(currentProduct?.price)} </span>
						{/* <span className='price-sale'>{vndCurrencyFormat(currProduct?.productOldPrice)} </span>
						<span className='price-tag-sale'>
							{-discountPercent(currentProduct?.productNewPrice, currProduct?.productOldPrice)} %
						</span> */}
					</div>
				</div>

				<AddToCartButton
					onClick={() => {
						dispatch(addToCart(currentProduct));
					}}
					size='large'>
					Thêm
				</AddToCartButton>

				<div className='product-detail-vendor'>
					<p>
						Đơn hàng đang được xử lý bởi <span className='vendor-name'> {currentProduct.storeName}</span>
					</p>
				</div>

				{/* Product Components */}
				<div>
					<div style={{ marginBottom: '1rem' }}>
						<h2 className='product-detail-name' style={{ marginBottom: '0.5rem' }}>
							{currentProduct?.menuName}
						</h2>
						<div className='line'></div>
					</div>
					<ProductList products={productInMenu}></ProductList>
				</div>
				<CartBtn></CartBtn>
			</Container>
		</>
	);
}
