import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import moment from 'moment/moment';
import Check from '@mui/icons-material/Check';
import { Box, Container, Typography } from '@mui/material';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import HailIcon from '@mui/icons-material/Hail';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { ORANGE_COLOR } from '../../constansts/constants';
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
import { setSuccessMessage } from '../../redux/messageSlice';
import { useConfirm } from 'material-ui-confirm';
import _ from 'lodash';
import { ORDER_TYPE_ENUM } from '../../util/order.util';
import { ORDER_STATUS_ENUM } from '../../util/order.util';
// const QontoConnector = styled(StepConnector)(({ theme }) => ({
// 	[`&.${stepConnectorClasses.alternativeLabel}`]: {
// 		top: 10,
// 		left: 'calc(-50% + 16px)',
// 		right: 'calc(50% + 16px)',
// 	},
// 	[`&.${stepConnectorClasses.active}`]: {
// 		[`& .${stepConnectorClasses.line}`]: {
// 			borderColor: ORANGE_COLOR,
// 		},
// 	},
// 	[`&.${stepConnectorClasses.completed}`]: {
// 		[`& .${stepConnectorClasses.line}`]: {
// 			borderColor: ORANGE_COLOR,
// 		},
// 	},
// 	[`& .${stepConnectorClasses.line}`]: {
// 		borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
// 		borderTopWidth: 3,
// 		borderRadius: 1,
// 	},
// }));

// const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
// 	color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
// 	display: 'flex',
// 	height: 22,
// 	alignItems: 'center',
// 	...(ownerState.active && {
// 		color: '#784af4',
// 	}),
// 	'& .QontoStepIcon-completedIcon': {
// 		color: '#784af4',
// 		zIndex: 1,
// 		fontSize: 18,
// 	},
// 	'& .QontoStepIcon-circle': {
// 		width: 8,
// 		height: 8,
// 		borderRadius: '50%',
// 		backgroundColor: 'currentColor',
// 	},
// }));

// function QontoStepIcon(props) {
// 	const { active, completed, className } = props;

// 	return (
// 		<QontoStepIconRoot ownerState={{ active }} className={className}>
// 			{completed ? <Check className='QontoStepIcon-completedIcon' /> : <div className='QontoStepIcon-circle' />}
// 		</QontoStepIconRoot>
// 	);
// }

// QontoStepIcon.propTypes = {
// 	/**
// 	 * Whether this step is active.
// 	 * @default false
// 	 */
// 	active: PropTypes.bool,
// 	className: PropTypes.string,
// 	/**
// 	 * Mark the step as completed. Is passed to child components.
// 	 * @default false
// 	 */
// 	completed: PropTypes.bool,
// };

// const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
// 	[`&.${stepConnectorClasses.alternativeLabel}`]: {
// 		top: 22,
// 	},
// 	[`&.${stepConnectorClasses.active}`]: {
// 		[`& .${stepConnectorClasses.line}`]: {
// 			backgroundColor: ORANGE_COLOR,
// 		},
// 	},
// 	[`&.${stepConnectorClasses.completed}`]: {
// 		[`& .${stepConnectorClasses.line}`]: {
// 			backgroundColor: ORANGE_COLOR,
// 		},
// 	},
// 	[`& .${stepConnectorClasses.line}`]: {
// 		height: 3,
// 		border: 0,
// 		backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
// 		borderRadius: 1,
// 	},
// }));

// const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
// 	backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
// 	zIndex: 1,
// 	color: '#fff',
// 	width: 50,
// 	height: 50,
// 	display: 'flex',
// 	borderRadius: '50%',
// 	justifyContent: 'center',
// 	alignItems: 'center',
// 	...(ownerState.active && {
// 		backgroundColor: ORANGE_COLOR,
// 		boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
// 	}),
// 	...(ownerState.completed && {
// 		backgroundColor: ORANGE_COLOR,
// 	}),
// }));

// function ColorlibStepIcon(props) {
// 	const { active, completed, className } = props;

// 	const icons = {
// 		1: <Inventory2Icon />,
// 		2: <HailIcon />,
// 		3: <AssignmentTurnedInIcon />,
// 	};

// 	return (
// 		<ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
// 			{icons[String(props.icon)]}
// 		</ColorlibStepIconRoot>
// 	);
// }

// ColorlibStepIcon.propTypes = {
// 	/**
// 	 * Whether this step is active.
// 	 * @default false
// 	 */
// 	active: PropTypes.bool,
// 	className: PropTypes.string,
// 	/**
// 	 * Mark the step as completed. Is passed to child components.
// 	 * @default false
// 	 */
// 	completed: PropTypes.bool,
// 	/**
// 	 * The label displayed in the step icon.
// 	 */
// 	icon: PropTypes.node,
// };

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
					<h2 style={{ color: 'grey' }}>Thông tin đơn hàng</h2>
					<div>
						<p
							style={{
								fontSize: '1.5rem',
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
								fontSize: '1.5rem',
							}}>
							<span>Số điện thoại: </span>
							<span
								style={{
									fontWeight: 'bold',
								}}>
								{currentOrder?.deliveryPhone}
							</span>
						</p>
					</div>
					<div style={{ marginTop: '15px' }}>
						<span
							style={{
								display: 'block',
								fontSize: '1.5rem',
								color: '#f36522',
								margin: '0.5rem 0',
							}}>
							{_.isEmpty(currentOrder) == false ? ORDER_STATUS_ENUM[currentOrder?.orderStatus].name : ''}
						</span>
						<span>
							<FmdGoodOutlinedIcon style={{ width: '15px', height: '15px' }} />
							Giao tại:{' '}
							<b>
								{_.isEmpty(currentOrder?.roomNumber) == false && currentOrder?.orderType == 2
									? currentOrder?.roomNumber
									: 'Nhận tại cửa hàng'}
							</b>
						</span>

						<span style={{ marginLeft: '100px' }}>
							<CalendarTodayOutlinedIcon style={{ width: '15px', height: '15px' }} />
							Nhận hàng:{' '}
							<b>
								{moment(`2015-06-17 ${mappedTimeSlot?.arriveTime}`).format('HH:mm')}-
								{moment(`2015-06-17 ${mappedTimeSlot?.checkoutTime}`).format('HH:mm')}
							</b>
						</span>
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
