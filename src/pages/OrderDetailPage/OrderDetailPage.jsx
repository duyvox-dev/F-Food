import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import moment from 'moment/moment';
import { Box, Container, Typography } from '@mui/material';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ProductInOrder from '../OrderHistoryPage/ProductInOrder/ProductInOrder';
import Button from '@mui/material/Button';
import { vndCurrencyFormat } from '../../util/currency.util';
import Divider from '@mui/material/Divider';
import { useState } from 'react';
import StoreIcon from '@mui/icons-material/Store';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetail, updateOrderStatus } from '../../redux/orderSlice';
import { useParams } from 'react-router-dom';
import { useConfirm } from 'material-ui-confirm';
import _ from 'lodash';
import { ORDER_STATUS_ENUM } from '../../util/order.util';
const StyledButton = styled(Button)({
	color: 'gray',
	background: 'white',
	padding: '0.5rem 2rem',
	border: '1px solid gray',
	'&:hover': { backgroundColor: '' },
	width: '100%',
});

// const steps = ['Đã đặt hàng', 'Đang giao hàng', 'Đã nhận hàng'];

export default function OrderDetailPage() {
	// const mockDataProducts = [
	// 	{
	// 		id: 1,
	// 		name: 'Bánh chuối',
	// 		quantity: 10,
	// 		status: 'available',
	// 		image:
	// 			'https://7rewards-images-s3-ap-southeast-1-amazonaws.cdn.vccloud.vn/production/product_uoms/images/5042_1627615937_original.jpg?1650293797',
	// 		price: 10000,
	// 	},
	// 	{
	// 		id: 2,
	// 		name: 'Combo chuối nho',
	// 		quantity: 10,
	// 		status: 'available',
	// 		price: 50000,
	// 		discountPrice: 40000,

	// 		image:
	// 			'https://image.sevensystem.vn/crop?width=1043&height=1043&type=jpeg&url=https://ceph-external.sevensystem.vn/promotion-image/promo_5564_1664357789659.jpg?1664357789709',
	// 	},
	// 	{
	// 		id: 3,
	// 		name: 'Nho',
	// 		quantity: 5,
	// 		status: '',
	// 		price: 20000,
	// 		discountPrice: 10000,
	// 		image:
	// 			'https://image.sevensystem.vn/crop?width=1043&height=1042&type=jpeg&url=https://ceph-external.sevensystem.vn/promotion-image/promo_5408_1664186009325.jpg?1664186009396',
	// 	},
	// ];
	// const [products, setProducts] = useState(mockDataProducts);
	const { id } = useParams();
	const dispatch = useDispatch();
	const { currentOrder } = useSelector((state) => state.order);
	const { user } = useSelector((state) => state.auth);
	const { timeSlotList } = useSelector((state) => state.setting);
	const confirm = useConfirm();
	const [mappedTimeSlot, setMappedTimeSlot] = useState({});
	const [isAbleToCancel, setIsAbleToCancel] = useState(false);

	const handleCancel = async () => {
		try {
			const res = await confirm({
				title: 'Xác nhận huỷ đơn',
				description: `Bạn có thực sự muốn huỷ đơn`,
			});
			dispatch(updateOrderStatus(currentOrder.id));
		} catch (err) {}
	};

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(getOrderDetail(id));
	}, []);
	useEffect(() => {
		const timeSlot = timeSlotList.find((time) => time.id == currentOrder.timeSlotId);
		setMappedTimeSlot(timeSlot);
		if (currentOrder.orderStatus == 2) {
			setIsAbleToCancel(true);
		} else {
			setIsAbleToCancel(false);
		}
	}, [currentOrder]);

	return (
		<Container
			maxWidth='lg'
			sx={{
				padding: '1rem 0',
			}}>
			<Stack sx={{ width: '100%' }} spacing={4}>
				{/* <div style={{ textAlign: 'center' }}>
					<h2>Chi tiết đơn hàng</h2>
					<Stepper
						alternativeLabel
						activeStep={status === 'ordered' ? 0 : status === 'shipping' ? 1 : 2}
						connector={<ColorlibConnector />}>
						{steps.map((label) => (
							<Step key={label}>
								<StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
				</div> */}
				<div style={{ width: '100%', margin: '0 auto', marginTop: '20px' }}>
					<h2 style={{ color: 'grey' }}>
						Thông tin đơn hàng <span style={{ color: 'black' }}>#{currentOrder?.orderName}</span>
					</h2>
					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
						<p
							style={{
								fontSize: '1.2rem',
							}}>
							<span>Họ tên: </span>
							<span
								style={{
									fontWeight: 'bold',
								}}>
								{user.name}
							</span>
						</p>
						<p
							style={{
								fontSize: '1.2rem',
							}}>
							<span>Số điện thoại: </span>
							<span
								style={{
									fontWeight: 'bold',
								}}>
								{currentOrder?.deliveryPhone}
							</span>
						</p>
						<p
							style={{
								fontSize: '1.2rem',
							}}>
							Thời gian:
							<span
								style={{
									fontWeight: 'bold',
								}}>
								{moment(currentOrder.checkInDate).format('DD/MM/YYYY HH:MM')}
							</span>
						</p>
						<p
							style={{
								fontSize: '1.2rem',
							}}>
							Trạng thái:
							<span
								style={{
									fontSize: '1.2rem',
									color: '#f36522',
									margin: '0.5rem 0',
									fontWeight: 'bold',
								}}>
								{_.isEmpty(currentOrder) == false ? ORDER_STATUS_ENUM[currentOrder?.orderStatus].name : ''}
							</span>
						</p>
					</div>
					<div>
						<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
							<p
								style={{
									fontSize: '1.2rem',
								}}>
								<FmdGoodOutlinedIcon style={{ width: '15px', height: '15px' }} />
								Giao tại:{' '}
								<b>
									{_.isEmpty(currentOrder?.roomNumber) == false && currentOrder?.orderType == 2
										? currentOrder?.roomNumber
										: 'Nhận tại cửa hàng'}
								</b>
							</p>

							<p
								style={{
									fontSize: '1.2rem',
								}}>
								<CalendarTodayOutlinedIcon style={{ width: '15px', height: '15px' }} />
								Nhận hàng:{' '}
								<b>
									{moment(`2015-06-17 ${mappedTimeSlot?.arriveTime}`).format('HH:mm')}-
									{moment(`2015-06-17 ${mappedTimeSlot?.checkoutTime}`).format('HH:mm')}
								</b>
							</p>
						</div>
					</div>
				</div>

				<Box>
					<h3
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '1rem',
							color: 'white',
							background: 'rgba(243, 101, 34)',
							padding: '0.5rem 0.5rem',
						}}>
						<StoreIcon sx={{ color: 'white' }}></StoreIcon>
						<span>{currentOrder?.storeName}</span>
					</h3>
					{currentOrder?.orderDetails?.map((product) => {
						return <ProductInOrder product={product}></ProductInOrder>;
					})}
					<Stack direction='row' justifyContent='space-between' sx={{ padding: '1rem' }}>
						<div>
							<p>Tiền hàng</p>
							<p>Phí vận chuyển</p>
						</div>
						<div style={{ fontWeight: 'bolder', textAlign: 'right' }}>
							<p>{vndCurrencyFormat(currentOrder?.totalAmount)} </p>
							<p>{vndCurrencyFormat(currentOrder?.shippingFee)}</p>
						</div>
					</Stack>
					<Divider />

					<Stack direction='row' justifyContent='space-between' mt={5}>
						<div>
							<Typography variant='h6'>Tổng thanh toán:</Typography>
						</div>
						<div>
							<Typography variant='h6'>
								<span className='order-price'>
									{_.isEmpty(currentOrder.finalAmount) == false
										? vndCurrencyFormat(currentOrder?.finalAmount)
										: vndCurrencyFormat(currentOrder?.totalAmount + currentOrder?.shippingFee)}
								</span>
							</Typography>
						</div>
					</Stack>
					<Stack direction='row' justifyContent={'flex-end'} sx={{ marginTop: '1rem' }}>
						{isAbleToCancel ? (
							<StyledButton
								onClick={() => {
									handleCancel();
								}}>
								Huỷ
							</StyledButton>
						) : (
							<></>
						)}
					</Stack>
				</Box>
			</Stack>
		</Container>
	);
}
