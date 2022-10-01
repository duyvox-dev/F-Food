import React, { useState, useEffect } from 'react';
import './OrderPage.scss';
import { Container, Typography } from '@mui/material';
import CartList from './Cart/CartList';
import OrderInfo from './OrderInfo';
import Checkout from './Checkout/Checkout';
import OrderLocation from './OrderLocation';
import FeeList from './Fee/FeeList';
export default function OrderPage() {
	const mockDataFee = {
		originCost: {
			name: 'Tạm tính',
			cost: 10000,
		},
		discountCost: {
			name: 'Sau khuyến mãi',
			cost: 9000,
		},

		shippingCost: {
			name: 'Phí giao hàng',
			cost: 8000,
		},
	};
	const mockDataCart = [
		{
			id: 111,
			name: 'Bánh chuối',
			quantity: 10,
			status: 'available',
			image:
				'https://7rewards-images-s3-ap-southeast-1-amazonaws.cdn.vccloud.vn/production/product_uoms/images/5042_1627615937_original.jpg?1650293797',
			price: 10000,
		},
		{
			id: 111,
			name: 'Combo chuối nho',
			quantity: 10,
			status: 'available',
			price: 50000,
			discountPrice: 40000,

			image:
				'https://image.sevensystem.vn/crop?width=1043&height=1043&type=jpeg&url=https://ceph-external.sevensystem.vn/promotion-image/promo_5564_1664357789659.jpg?1664357789709',
		},
		{
			id: 111,
			name: 'Nho',
			quantity: 5,
			status: '',
			price: 20000,
			discountPrice: 10000,
			image:
				'https://image.sevensystem.vn/crop?width=1043&height=1042&type=jpeg&url=https://ceph-external.sevensystem.vn/promotion-image/promo_5408_1664186009325.jpg?1664186009396',
		},
	];
	const [fees, setFees] = useState(mockDataFee);
	const [shippingFee, setShippingFee] = useState(15000);
	const [cart, setCart] = useState(mockDataCart);
	const calculateFee = (shippingFee) => {
		let discountCost = 0;
		let originCost = 0;

		cart.map((cartItem) => {
			if (cartItem?.discountPrice) {
				discountCost += cartItem?.discountPrice;
			} else {
				discountCost += cartItem?.price;
			}
			originCost += cartItem?.price;
		});
		return {
			originCost: {
				name: 'Tạm tính',
				cost: originCost,
			},
			discountCost: {
				name: 'Sau khuyến mãi',
				cost: discountCost,
			},

			shippingCost: {
				name: 'Phí giao hàng',
				cost: shippingFee,
			},
		};
	};
	useEffect(() => {
		const totalFee = calculateFee(shippingFee);
		setFees(totalFee);
	}, [cart]);
	return (
		<>
			<Container maxWidth='sm' sx={{ background: '#F7F7F7', height: '90vh', overflow: 'scroll', padding: '1rem 0' }}>
				<Typography variant='h4' align='center' fontWeight='bold'>
					Đơn hàng của bạn
				</Typography>
				<OrderLocation />
				<OrderInfo />
				<CartList carts={cart} />
				<FeeList fees={fees}></FeeList>
				<Checkout fees={fees} />
			</Container>
		</>
	);
}
