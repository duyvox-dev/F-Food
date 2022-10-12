import React, { useEffect, useState } from 'react';
import { vndCurrencyFormat } from '../../../util/currency.util';
import { Typography, Paper, Grid2, Stack, Box } from '@mui/material';

import './OrderItem.scss';
export default function OrderItem({ orderData = {} }) {
	const [statusName, setStatusName] = useState('');
	useEffect(() => {
		let newStatus = '';
		switch (orderData.OrderStatus) {
			case 0:
				newStatus = 'Người bán huỷ';
				break;
			case 1:
				newStatus = 'Đã huỷ';
				break;

			case 2:
				newStatus = 'Chờ xác nhận';
				break;
			case 3:
				newStatus = 'Chờ lấy hàng';
				break;
			case 4:
				newStatus = 'Đang vận chuyển';
				break;
			case 5:
				newStatus = 'Giao thành công';
				break;
		}
		setStatusName(newStatus);
	}, [orderData]);
	// useEffect(() => {
	// 	console.log({ orderData, statusName });
	// }, [statusName]);
	return (
		<Paper sx={{ margin: '1rem 0', padding: '1rem' }}>
			<Stack direction='row' justifyContent='space-between' alignItems='center'>
				<Typography variant='h6'>{orderData.SupplierStore.name}</Typography>
				<span className='orderItem-status'>{statusName}</span>
			</Stack>
			<div></div>
		</Paper>
	);
}
