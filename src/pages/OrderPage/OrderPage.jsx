import React from 'react';
import './OrderPage.module.scss';
import { Container, Typography } from '@mui/material';
import CartList from './CartList';
import OrderInfo from './OrderInfo';
import Checkout from './Checkout';
import OrderLocation from './OrderLocation';
export default function OrderPage() {
	return (
		<>
			<Container maxWidth='sm' sx={{ background: '#F7F7F7' }}>
				<Typography variant='h4' align='center' fontWeight='bold'>
					Đơn hàng của bạn
				</Typography>
				<OrderLocation></OrderLocation>
				<OrderInfo></OrderInfo>
				<CartList></CartList>
				<Checkout></Checkout>
			</Container>
		</>
	);
}
