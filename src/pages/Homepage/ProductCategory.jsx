import React from 'react';
import './Homepage.scss';
import { AddRounded } from '@mui/icons-material';
import { ProductByCategory } from '../../util/data';
import { Link } from 'react-router-dom';
import { discountPercent } from '../../util/currency.util';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
function ProductCategory() {

	return (
		<>
			<div className='productContainer'>
				{ProductByCategory &&
					ProductByCategory.map((item) => (
						<Link to={`/detail/${item.id}`} state={item}>
							<div key={item.id} className='product-content'>
								<img src={item.image} alt='' className='image-products' />
								<div className='content-item'>
									<p className='name-item'>
										{/* <Link to={`/detail/${n.id}`}>{n.productName}</Link> */}
										{item.productName}
									</p>
									<div className='price-item-discount'>
										<p className='item-price'>
											{item.productNewPrice} <span className='unit-item-price'>đ</span>
										</p>
										<p className='discount-item'>- {discountPercent(item.productNewPrice, item.productOldPrice)}%</p>
									</div>
									<div className='bottom-item'>
										<p className='itemOldPrice'>
											{item.productOldPrice} <span className='unit-item-price'>đ</span>
										</p>
										<div className='addItemToCart'>
											<AddRounded />
										</div>
									</div>
								</div>
							</div>
						</Link>
					))}
			</div>
		</>
	);
}

export default ProductCategory;
