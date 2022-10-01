import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
export default function OrderLocation() {
	return (
		<div className='order-section'>
			<div className='heading-flex'>
				<h3 className='heading-title'>Người nhận</h3>
				<span className='heading-change'>Thay đổi</span>
			</div>
			<div className='box-content' elevation={0}>
				<div>
					<span className='box-content-title'>Email</span>
					<span className='box-content-info'>johnCena@gmail.com</span>
				</div>
				<div>
					<span className='box-content-title'>Họ tên</span>
					<span className='box-content-info'>John Cena</span>
				</div>
			</div>
		</div>
	);
}
