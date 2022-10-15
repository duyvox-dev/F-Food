import React from 'react';
import { Container } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import './ProductByCategoryPage.scss';
import { vndCurrencyFormat, discountPercent } from '../../util/currency.util';
import IconCacLoaiBanh from '../../img/icon-cac-loai-banh.jpg';
import BanhMiGaXe from '../../img/banhmigaxe.png';
import { ProductByCategory, Products } from '../../util/data';
import { Link, useParams } from 'react-router-dom';
import { DataMenuCategory } from '../../util/data';

const CheckoutButton = styled(Button)({
	display: 'block',
	color: 'white',
	backgroundColor: 'rgba(243, 101, 34)',
	width: '100px',
	marginTop: '1rem',
	boxShadow: 'inherit',
	'&:hover': { backgroundColor: 'rgba(243, 101, 34)' },
});
export default function ProductByCategoryPage() {
	const { id } = useParams();
	const [currCategory, setCurrCategory] = useState({});
	useEffect(() => {
		const category = DataMenuCategory.find((category) => category.id == id);
		setCurrCategory(category);
	}, [id]);

	const [isMainData, setMainData] = useState(Products.filter((element) => element.categoryId == 'uudai'));

	const setData = (categoryId) => {
		setMainData(Products.filter((element) => element.categoryId == categoryId));
	};

	return (
		<>
			<Container
				maxWidth='lg'
				sx={{
					padding: '1rem 0',
				}}>
				<div>
					<div className='header-category'>
						<img src={IconCacLoaiBanh} alt='' className='icon-category' />
						<div className='title-category'>{currCategory?.name}</div>
						<KeyboardArrowDownIcon />
					</div>

					<div className='listProductByCategory'>
						{isMainData &&
							isMainData.map((data) => (
								<div key={data.id} className='content-product'>
									<Link to={`/detail/${data.id}`} className='category'>
										<div className='content-item'>
											<img src={data.image} alt='' className='image-product' />
											<div className='info-product'>
												<div className='name-product'>{data.productName}</div>
												<div className='product-price-discount'>
													<div className='product-new-price'>{vndCurrencyFormat(data.productNewPrice)}</div>
													<div className='discount-percent'>
														-{discountPercent(data.productNewPrice, data.productOldPrice)}%
													</div>
												</div>
												<div className='product-bottom'>
													<div className='product-old-price'>{vndCurrencyFormat(data.productOldPrice)}</div>
												</div>
											</div>
										</div>
									</Link>
									<CheckoutButton size='large' variant='contained'>
										Thêm
									</CheckoutButton>
								</div>
							))}
					</div>
				</div>
			</Container>
		</>
	);
}
