import React from 'react';
import { Container, Typography } from '@mui/material';
import './SearchProductPage.scss';
import NuocTao from '../../img/nuoctaoep.jpg';
import { vndCurrencyFormat, discountPercent } from '../../util/currency.util';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CheckoutButton = styled(Button)({
	display: 'block',
	color: 'white',
	backgroundColor: 'rgba(243, 101, 34)',
	width: '100px',
	marginTop: '1rem',
	boxShadow: 'inherit',
	'&:hover': { backgroundColor: 'rgba(243, 101, 34)' },
});

export default function SearchProductPage() {
	return (
		<>
			<Container
				maxWidth='lg'
				sx={{
					padding: '1rem 0',
				}}>
				<div className='searchpage'>
					<div className='header-search-page'>
						<Typography variant='h4' align='center' fontWeight='bold'>
							Tìm kiếm sản phẩm
						</Typography>
					</div>
					<div className='listProductBySearch'>
						<div className='titleCategoryBySearch'>
							<p>Đồ uống</p>
						</div>
						<div className='content-product'>
							<div className='content-item'>
								<img src={NuocTao} alt='' className='image-product' />
								<div className='info-product'>
									<div className='name-product'>Nước Táo Vfresh 1L</div>
									<div className='product-price-discount'>
										<div className='product-new-price'>{vndCurrencyFormat(43000)}</div>
										<div className='discount-percent'>-{discountPercent(43000, 49000)}%</div>
									</div>
									<div className='product-bottom'>
										<div className='product-old-price'>{vndCurrencyFormat(49000)}</div>
									</div>
								</div>
							</div>
							<CheckoutButton size='large' variant='contained'>
								Thêm
							</CheckoutButton>
						</div>
						<div className='content-product'>
							<div className='content-item'>
								<img src={NuocTao} alt='' className='image-product' />
								<div className='info-product'>
									<div className='name-product'>Nước Táo Vfresh 1L</div>
									<div className='product-price-discount'>
										<div className='product-new-price'>{vndCurrencyFormat(43000)}</div>
										<div className='discount-percent'>-{discountPercent(43000, 49000)}%</div>
									</div>
									<div className='product-bottom'>
										<div className='product-old-price'>{vndCurrencyFormat(49000)}</div>
									</div>
								</div>
							</div>
							<CheckoutButton size='large' variant='contained'>
								Thêm
							</CheckoutButton>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
