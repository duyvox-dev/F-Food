import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import OrderList from './OrderList/OrderList';
export default function OrderHistoryPage() {
	const mockDataOrderList = [
		{
			id: 6,
			TotalAmout: 1020000,
			OrderStatus: 0,
			CheckInDate: '22/5/2002',
			SupplierStore: {
				id: 1,
				name: 'SevenEleven',
			},
			products: [
				{
					id: 1,
					name: 'Bánh chuối',
					quantity: 10,
					status: 'available',
					image:
						'https://7rewards-images-s3-ap-southeast-1-amazonaws.cdn.vccloud.vn/production/product_uoms/images/5042_1627615937_original.jpg?1650293797',
					price: 10000,
				},
				{
					id: 2,
					name: 'Combo chuối nho',
					quantity: 10,
					status: 'available',
					price: 50000,
					discountPrice: 40000,

					image:
						'https://image.sevensystem.vn/crop?width=1043&height=1043&type=jpeg&url=https://ceph-external.sevensystem.vn/promotion-image/promo_5564_1664357789659.jpg?1664357789709',
				},
			],
		},
		{
			id: 1,
			TotalAmout: 100000,
			OrderStatus: 1,
			CheckInDate: '22/5/2002',
			SupplierStore: {
				id: 1,
				name: 'SevenEleven',
			},
			products: [
				{
					id: 1,
					name: 'Bánh chuối',
					quantity: 10,
					status: 'available',
					image:
						'https://7rewards-images-s3-ap-southeast-1-amazonaws.cdn.vccloud.vn/production/product_uoms/images/5042_1627615937_original.jpg?1650293797',
					price: 10000,
				},
				{
					id: 2,
					name: 'Combo chuối nho',
					quantity: 10,
					status: 'available',
					price: 50000,
					discountPrice: 40000,

					image:
						'https://image.sevensystem.vn/crop?width=1043&height=1043&type=jpeg&url=https://ceph-external.sevensystem.vn/promotion-image/promo_5564_1664357789659.jpg?1664357789709',
				},
			],
		},
		{
			id: 2,
			TotalAmout: 200000,
			OrderStatus: 2,
			CheckInDate: '22/7/2022',
			SupplierStore: {
				id: 2,
				name: 'Passio',
			},
			products: [
				{
					id: 1,
					name: 'Bánh chuối',
					quantity: 10,
					status: 'available',
					image:
						'https://7rewards-images-s3-ap-southeast-1-amazonaws.cdn.vccloud.vn/production/product_uoms/images/5042_1627615937_original.jpg?1650293797',
					price: 10000,
				},
				{
					id: 2,
					name: 'Combo chuối nho',
					quantity: 10,
					status: 'available',
					price: 50000,
					discountPrice: 40000,

					image:
						'https://image.sevensystem.vn/crop?width=1043&height=1043&type=jpeg&url=https://ceph-external.sevensystem.vn/promotion-image/promo_5564_1664357789659.jpg?1664357789709',
				},
			],
		},
		{
			id: 3,
			TotalAmout: 300000,
			OrderStatus: 3,
			CheckInDate: '11/5/2021',
			SupplierStore: {
				id: 1,
				name: 'SevenEleven',
			},
			products: [
				{
					id: 2,
					name: 'Combo chuối nho',
					quantity: 10,
					status: 'available',
					price: 50000,
					discountPrice: 40000,

					image:
						'https://image.sevensystem.vn/crop?width=1043&height=1043&type=jpeg&url=https://ceph-external.sevensystem.vn/promotion-image/promo_5564_1664357789659.jpg?1664357789709',
				},
			],
		},
		{
			id: 4,
			TotalAmout: 52000,
			OrderStatus: 4,
			CheckInDate: '11/7/2022',
			SupplierStore: {
				id: 1,
				name: 'SevenEleven',
			},
			products: [
				{
					id: 1,
					name: 'Bánh chuối',
					quantity: 10,
					status: 'available',
					image:
						'https://7rewards-images-s3-ap-southeast-1-amazonaws.cdn.vccloud.vn/production/product_uoms/images/5042_1627615937_original.jpg?1650293797',
					price: 10000,
				},
				{
					id: 2,
					name: 'Combo chuối nho',
					quantity: 10,
					status: 'available',
					price: 50000,
					discountPrice: 40000,

					image:
						'https://image.sevensystem.vn/crop?width=1043&height=1043&type=jpeg&url=https://ceph-external.sevensystem.vn/promotion-image/promo_5564_1664357789659.jpg?1664357789709',
				},
			],
		},
		{
			id: 5,
			TotalAmout: 12000,
			OrderStatus: 5,
			CheckInDate: '11/7/2022',
			SupplierStore: {
				id: 1,
				name: 'SevenEleven',
			},
			products: [
				{
					id: 1,
					name: 'Bánh chuối',
					quantity: 10,
					status: 'available',
					image:
						'https://7rewards-images-s3-ap-southeast-1-amazonaws.cdn.vccloud.vn/production/product_uoms/images/5042_1627615937_original.jpg?1650293797',
					price: 10000,
				},
				{
					id: 2,
					name: 'Combo chuối nho',
					quantity: 10,
					status: 'available',
					price: 50000,
					discountPrice: 40000,

					image:
						'https://image.sevensystem.vn/crop?width=1043&height=1043&type=jpeg&url=https://ceph-external.sevensystem.vn/promotion-image/promo_5564_1664357789659.jpg?1664357789709',
				},
			],
		},
		{
			id: 7,
			TotalAmout: 112000,
			OrderStatus: 0,
			CheckInDate: '22/5/2002',
			SupplierStore: {
				id: 2,
				name: 'Passio',
			},
			products: [
				{
					id: 1,
					name: 'Bánh chuối',
					quantity: 10,
					status: 'available',
					image:
						'https://7rewards-images-s3-ap-southeast-1-amazonaws.cdn.vccloud.vn/production/product_uoms/images/5042_1627615937_original.jpg?1650293797',
					price: 10000,
				},
				{
					id: 2,
					name: 'Combo chuối nho',
					quantity: 10,
					status: 'available',
					price: 50000,
					discountPrice: 40000,

					image:
						'https://image.sevensystem.vn/crop?width=1043&height=1043&type=jpeg&url=https://ceph-external.sevensystem.vn/promotion-image/promo_5564_1664357789659.jpg?1664357789709',
				},
			],
		},
	];
	const [rawOrderList, setRawOrderList] = useState(mockDataOrderList);
	const [sortedOrderList, setSortedOrderList] = useState({});
	const sortOrderList = (orderList = []) => {
		const storeCancel = orderList.filter((order) => order.OrderStatus == 0);
		console.log(storeCancel);
		const cancel = orderList.filter((order) => order.OrderStatus == 1);
		const pending = orderList.filter((order) => order.OrderStatus == 2);
		const assign = orderList.filter((order) => order.OrderStatus == 3);
		const delivery = orderList.filter((order) => order.OrderStatus == 4);
		const finish = orderList.filter((order) => order.OrderStatus == 5);
		return {
			storeCancel,
			cancel,
			pending,
			assign,
			delivery,
			finish,
		};
	};
	useEffect(() => {
		const newList = sortOrderList(rawOrderList);
		const newSortedList = {
			storeCancel: {
				statusName: 'Người bán huỷ',
				orderInfo: newList.storeCancel,
			},
			cancel: {
				statusName: 'Đã huỷ',
				orderInfo: newList.cancel,
			},
			pending: {
				statusName: 'Chờ xác nhận',
				orderInfo: newList.pending,
			},
			assign: {
				statusName: 'Chờ lấy hàng',
				orderInfo: newList.assign,
			},
			delivery: {
				statusName: 'Đang giao hàng',
				orderInfo: newList.delivery,
			},
			finish: {
				statusName: 'Giao thành công',
				orderInfo: newList.finish,
			},
		};
		setSortedOrderList(newSortedList);
	}, [rawOrderList]);
	return (
		<>
			<Container
				maxWidth='lg'
				sx={{
					padding: '1rem 0',
				}}>
				<Typography variant='h4' align='center' fontWeight='bold'>
					Đơn hàng của bạn
				</Typography>
				<OrderList orderList={sortedOrderList}></OrderList>
			</Container>
		</>
	);
}
