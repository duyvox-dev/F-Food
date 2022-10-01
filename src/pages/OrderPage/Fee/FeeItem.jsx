import React from 'react';

export default function FeeItem({ fee }) {
	return (
		<div className='fee-item'>
			<span className='fee-name'>{fee?.name}</span>
			<span className='fee-cost'>
				{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(fee?.cost)}
			</span>
		</div>
	);
}
