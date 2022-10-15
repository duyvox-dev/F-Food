import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
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
import { useEffect } from 'react';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
	[`&.${stepConnectorClasses.alternativeLabel}`]: {
		top: 10,
		left: 'calc(-50% + 16px)',
		right: 'calc(50% + 16px)',
	},
	[`&.${stepConnectorClasses.active}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			borderColor: ORANGE_COLOR,
		},
	},
	[`&.${stepConnectorClasses.completed}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			borderColor: ORANGE_COLOR,
		},
	},
	[`& .${stepConnectorClasses.line}`]: {
		borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
		borderTopWidth: 3,
		borderRadius: 1,
	},
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
	color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
	display: 'flex',
	height: 22,
	alignItems: 'center',
	...(ownerState.active && {
		color: '#784af4',
	}),
	'& .QontoStepIcon-completedIcon': {
		color: '#784af4',
		zIndex: 1,
		fontSize: 18,
	},
	'& .QontoStepIcon-circle': {
		width: 8,
		height: 8,
		borderRadius: '50%',
		backgroundColor: 'currentColor',
	},
}));

function QontoStepIcon(props) {
	const { active, completed, className } = props;

	return (
		<QontoStepIconRoot ownerState={{ active }} className={className}>
			{completed ? <Check className='QontoStepIcon-completedIcon' /> : <div className='QontoStepIcon-circle' />}
		</QontoStepIconRoot>
	);
}

QontoStepIcon.propTypes = {
	/**
	 * Whether this step is active.
	 * @default false
	 */
	active: PropTypes.bool,
	className: PropTypes.string,
	/**
	 * Mark the step as completed. Is passed to child components.
	 * @default false
	 */
	completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
	[`&.${stepConnectorClasses.alternativeLabel}`]: {
		top: 22,
	},
	[`&.${stepConnectorClasses.active}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			backgroundColor: ORANGE_COLOR,
		},
	},
	[`&.${stepConnectorClasses.completed}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			backgroundColor: ORANGE_COLOR,
		},
	},
	[`& .${stepConnectorClasses.line}`]: {
		height: 3,
		border: 0,
		backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
		borderRadius: 1,
	},
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
	zIndex: 1,
	color: '#fff',
	width: 50,
	height: 50,
	display: 'flex',
	borderRadius: '50%',
	justifyContent: 'center',
	alignItems: 'center',
	...(ownerState.active && {
		backgroundColor: ORANGE_COLOR,
		boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
	}),
	...(ownerState.completed && {
		backgroundColor: ORANGE_COLOR,
	}),
}));

function ColorlibStepIcon(props) {
	const { active, completed, className } = props;

	const icons = {
		1: <Inventory2Icon />,
		2: <HailIcon />,
		3: <AssignmentTurnedInIcon />,
	};

	return (
		<ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
			{icons[String(props.icon)]}
		</ColorlibStepIconRoot>
	);
}

ColorlibStepIcon.propTypes = {
	/**
	 * Whether this step is active.
	 * @default false
	 */
	active: PropTypes.bool,
	className: PropTypes.string,
	/**
	 * Mark the step as completed. Is passed to child components.
	 * @default false
	 */
	completed: PropTypes.bool,
	/**
	 * The label displayed in the step icon.
	 */
	icon: PropTypes.node,
};

const StyledButton = styled(Button)({
	color: 'white',
	backgroundColor: 'rgba(243, 101, 34)',
	padding: '0.5rem 2rem',
	'&:hover': { backgroundColor: 'rgba(243, 101, 34)' },
	width: '100%',
});

const steps = ['Đã đặt hàng', 'Đang giao hàng', 'Đã nhận hàng'];

export default function OrderDetailPage() {
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

	// get status from store
	let status = 'shipping';

	return (
		<Container maxWidth='lg'>
			<Stack sx={{ width: '100%' }} spacing={4}>
				<div style={{ textAlign: 'center' }}>
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
				</div>
				<div style={{ width: '100%', margin: '0 auto', marginTop: '20px' }}>
					<h1 style={{ color: 'grey' }}>Địa chỉ nhận hàng</h1>
					<div>
						<div style={{ fontWeight: 'bolder' }}>
							<span>Nguyễn Quốc Nam</span> - <span>012345678</span>
						</div>
					</div>
					<div style={{ marginTop: '15px' }}>
						<span>
							<FmdGoodOutlinedIcon style={{ width: '15px', height: '15px' }} />
							Giao hàng tại: <b>Phòng 202</b>
						</span>
						<span style={{ marginLeft: '100px' }}>
							<CalendarTodayOutlinedIcon style={{ width: '15px', height: '15px' }} />
							Nhận hàng: <b>16h, thứ 7 (8/10)</b>
						</span>
					</div>
				</div>
				<div style={{ backgroundColor: 'pink', width: '100%', height: '20px', padding: '10px' }}>
					Đơn hàng được xử lý bởi 7Eleven
				</div>
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
					<Stack direction='row' justifyContent='space-between' sx={{ padding: '1rem' }}>
						<div>
							<p>Tiền hàng</p>
							<p>Phí vận chuyển</p>
						</div>
						<div style={{ fontWeight: 'bolder' }}>
							<p>{vndCurrencyFormat(92000)} </p>
							<p>{vndCurrencyFormat(20000)}</p>
						</div>
					</Stack>
					<Divider />
					<Stack>
						<div style={{ marginLeft: '15px', marginTop: '15px' }}>
							<span style={{ marginRight: '15px' }}>$</span>
							<span>Tiền mặt</span>
						</div>
					</Stack>
					<Stack direction='row' justifyContent='space-between' mt={5}>
						<div>
							<Typography variant='h6'>Tổng thanh toán:</Typography>
						</div>
						<div>
							<Typography variant='h6'>
								<span className='order-price'>{vndCurrencyFormat(102000)}</span>
							</Typography>
						</div>
					</Stack>
					<Stack direction='row' justifyContent={'flex-end'}>
						<StyledButton>Mua lại</StyledButton>
					</Stack>
				</Box>
			</Stack>
		</Container>
	);
}
