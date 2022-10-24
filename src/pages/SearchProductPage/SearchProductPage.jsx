import React from 'react';
import { Container, Typography } from '@mui/material';
import './SearchProductPage.scss';
import { vndCurrencyFormat, discountPercent } from '../../util/currency.util';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import CartBtn from '../../components/CartBtn/CartBtn';
import { addToCart } from '../../redux/cartSlice';
import { Link } from 'react-router-dom';
const CheckoutButton = styled(Button)({
	display: 'block',
	color: 'white',
	backgroundColor: 'rgba(243, 101, 34)',
	width: '100px',
	boxShadow: 'inherit',
	'&:hover': { backgroundColor: 'rgba(243, 101, 34)' },
});

export default function SearchProductPage() {
	const { searchProducts } = useSelector((state) => state.product);
	const dispatch = useDispatch();
	return (
		<>
			<Container
				maxWidth='lg'
				sx={{
					padding: '1rem 0',
					position: 'relative',
				}}>
				<div className='searchpage'>
					<div className='header-search-page'>
						<Typography variant='h4' align='center' fontWeight='bold'>
							Tìm kiếm sản phẩm
						</Typography>
					</div>
					<div className='listProductBySearch'>
						<div className='titleCategoryBySearch'>{/* <p>Đồ uống</p> */}</div>
						{searchProducts.length === 0 ? (
							<h2 className='null_alert'>
								Hiện tại chưa có sản phẩm cho mục tìm kiếm này, vui lòng chọn danh mục khác.
							</h2>
						) : (
							searchProducts.map((product, index) => (
								<div className='content-product' key={index}>
									<Link
										to={`/detail/${product?.id}`}
										style={{
											textDecoration: 'none',
											color: 'black',
											flex: '1',
										}}>
										<div className='content-item'>
											<img src={product.image} alt='' className='image-product' />
											<div className='info-product'>
												<div className='name-product'>{product.name}</div>
												<div className='product-price-discount'>
													<div className='product-new-price'>{vndCurrencyFormat(product.price)}</div>
													{/* <div className='discount-percent'>-{discountPercent(43000, 49000)}%</div> */}
												</div>
												{/* <div className='product-bottom'>
										<div className='product-old-price'>{vndCurrencyFormat(49000)}</div>
									</div> */}
											</div>
										</div>
									</Link>
									<CheckoutButton
										size='large'
										variant='contained'
										onClick={() => {
											dispatch(addToCart(product));
										}}>
										Thêm
									</CheckoutButton>
								</div>
							))
						)}
					</div>
				</div>
				<CartBtn></CartBtn>
			</Container>
		</>
	);
}
