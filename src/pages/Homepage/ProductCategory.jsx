import React from 'react';
import './Homepage.scss';
import { AddRounded } from '@mui/icons-material';
import { ProductByCategory } from '../../util/data';
import { Link } from 'react-router-dom';

function ProductCategory() {
	return (
		<>
			<div className='productContainer'>
				{ProductByCategory &&
					ProductByCategory.map((n) => (
						<div key={n.id} className='product-content'>
							<img src={n.image} alt='' className='image-products' />
							<div className='content-item'>
								<p className='name-item'>
									{/* <Link to={`/detail/${n.id}`}>{n.productName}</Link> */}
									{n.productName}
								</p>
								<div className='price-item-discount'>
									<p className='item-price'>
										{n.productNewPrice} <span className='unit-item-price'>đ</span>
									</p>
									<p className='discount-item'>-50%</p>
								</div>
								<div className='bottom-item'>
									<p className='itemOldPrice'>
										{n.productOldPrice} <span className='unit-item-price'>đ</span>
									</p>
									<div className='addItemToCart'>
										<AddRounded />
									</div>
								</div>
							</div>
						</div>
					))}
			</div>
		</>
	);
}

export default ProductCategory;
