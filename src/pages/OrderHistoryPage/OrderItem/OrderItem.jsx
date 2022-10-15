import React, { useEffect, useState } from 'react';
import { vndCurrencyFormat } from '../../../util/currency.util';
import { Typography, Paper, Grid2, Stack, Box } from '@mui/material';
import ProductInOrder from '../ProductInOrder/ProductInOrder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './OrderItem.scss';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)({
	color: 'white',
	backgroundColor: 'rgba(243, 101, 34)',
	padding: '0.5rem 2rem',
	'&:hover': { backgroundColor: 'rgba(243, 101, 34)' },
});
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
	const mockDataProducts = [
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
		{
			id: 3,
			name: 'Nho',
			quantity: 5,
			status: '',
			price: 20000,
			discountPrice: 10000,
			image:
				'https://image.sevensystem.vn/crop?width=1043&height=1042&type=jpeg&url=https://ceph-external.sevensystem.vn/promotion-image/promo_5408_1664186009325.jpg?1664186009396',
		},
	];
	const [products, setProducts] = useState(mockDataProducts);
	return (
		<Paper sx={{ margin: '1rem 0', padding: '1rem' }}>
			<Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ marginBottom: '1rem' }}>
				<Stack direction='row' spacing={2}>
					<Typography variant='h6'>{orderData.SupplierStore.name}</Typography>
					<img src={orderData.SupplierStore.image} className='supplier-image' alt='' />
				</Stack>
				<span className='orderItem-status'>{statusName}</span>
			</Stack>
			<Box>
				<ProductInOrder product={products[0]}></ProductInOrder>

				{products.length > 1 ? (
					<div className='see-more'>
						<span className='see-more-text'>
							<span>Xem thêm </span>
							<KeyboardArrowDownIcon />
						</span>
					</div>
				) : (
					<></>
				)}
				<Stack direction='row' justifyContent={'space-between'} sx={{ padding: '1rem' }}>
					<span>{products.length} sản phẩm</span>
					<Typography variant='h6'>
						Thành tiền: <span className='order-price'>{vndCurrencyFormat(orderData.TotalAmout)}</span>
					</Typography>
				</Stack>
				<Stack direction='row' justifyContent={'flex-end'}>
					<StyledButton>Mua lại</StyledButton>
				</Stack>
			</Box>
		</Paper>
	);
}
