import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
export default function OrderLocation({ openLocationModal = () => {}, location = {} }) {
	return (
		<div className='order-section'>
			<div className='heading-flex'>
				<h3 className='heading-title'>Giao tới</h3>
				<span
					className='heading-change'
					onClick={() => {
						openLocationModal();
					}}>
					Đổi địa điểm
				</span>
			</div>
			<div className='box-content' elevation={0}>
				<span className='box-content-heading'>{location?.label}</span>
				<div>
					<span className='box-content-title'>Thời gian giao hàng dự kiến</span>
					<span className='box-content-info'>9:15 - 9:45 </span>
				</div>
			</div>
		</div>
	);
}
