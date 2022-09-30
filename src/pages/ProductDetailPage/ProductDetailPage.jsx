import React from 'react';
import './ProductDetailPage.scss';
import banhmi from '../../assets/image/banhmi.jpg';

// or
import { Grid } from '@mui/material';

export default function ProductDetailPage() {
	let vendor = '7Eleven';

	return (
		<>
			<div className='container'>
				<div className='product-image'>
					<img src={banhmi} alt='' />
				</div>
				<div className='product-detail'>
					<h1 className='product-name'>Bánh Mì</h1>
					<div className='line'></div>
					<div className='product-price'>
						<span className='price'>24.000 đ</span>
						<span className='price-sale'>28.000 đ</span>
						<span className='price-tag-sale'>-15%</span>
					</div>
				</div>

				<button className='btn-add-product'>Thêm</button>

				<div className='product-vendor'>
					<p>
						Đơn hàng đang được xử lý bởi <span className='vendor-name'> {vendor}</span>
					</p>
				</div>
			</div>
		</>
	);
}
