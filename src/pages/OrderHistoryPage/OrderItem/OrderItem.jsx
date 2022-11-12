import React, { useEffect, useState } from 'react';
import { vndCurrencyFormat } from '../../../util/currency.util';
import { Typography, Paper, Grid2, Stack, Box } from '@mui/material';
import ProductInOrder from '../ProductInOrder/ProductInOrder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './OrderItem.scss';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { ORDER_STATUS_ENUM } from '../../../util/order.util';

export default function OrderItem({ orderData = {} }) {
	return (
		<Paper sx={{ margin: '1rem 0', padding: '1rem', boxShadow: '0px 0px 20px rgb(0 0 0 / 15%)' }}>
			<Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ marginBottom: '1rem' }}>
				<Stack direction='row' spacing={2}>
					<Typography variant='h6'>{orderData?.storeName}</Typography>
				</Stack>
				<span className='orderItem-status'>{ORDER_STATUS_ENUM[orderData.orderStatus].name}</span>
			</Stack>
			<Box>
				<ProductInOrder product={orderData.orderDetails[0]}></ProductInOrder>

				<div className='see-more'>
					<Link to={`/order-detail/${orderData.id}`} className='see-more-link'>
						<span className='see-more-text'>
							<span>Xem thêm </span>
							<KeyboardArrowDownIcon />
						</span>
					</Link>
				</div>

				<Stack direction='row' justifyContent={'space-between'} sx={{ padding: '1rem' }}>
					<span>{orderData.orderDetails.length} sản phẩm</span>
					<Typography variant='h6'>
						Thành tiền: <span className='order-price'>{vndCurrencyFormat(orderData.totalAmount)}</span>
					</Typography>
				</Stack>
			</Box>
		</Paper>
	);
}
