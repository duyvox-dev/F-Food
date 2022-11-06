import React, { useEffect, useState } from 'react';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import AssistWalkerIcon from '@mui/icons-material/AssistWalker';
import { ORDER_TYPE_ENUM } from '../../../util/order.util';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import './OrderType.scss';

const StyledButton = styled(Button)({
	background: '#fcf6f6',
	border: '2px solid rgba(243, 101, 34)',
	color: 'rgba(243, 101, 34)',
	// backgroundColor: 'rgba(243, 101, 34)',
	padding: '1rem 3rem',
	width: '100%',
	'&:hover': { backgroundColor: 'rgba(243, 101, 34)', color: 'white' },
	'&:disabled': {
		// backgroundColor: "gray",
		background: '#fcf6f6',
		border: '2px solid rgba(243, 101, 34)',
		color: 'rgba(243, 101, 34)',
		opacity: 0.3,
	},
	'&:active': {
		backgroundColor: 'rgba(243, 101, 34)',
	},
});
export default function OrderType({ handleChangeOrderType = () => {}, ordertype = {}, ableToChangeOrderType = true }) {
	const orderTypeList = [
		{
			...ORDER_TYPE_ENUM[0],
		},
		{
			...ORDER_TYPE_ENUM[1],
			icon: <AssistWalkerIcon sx={{ color: 'rgba(243, 101, 34)' }} />,
		},
		{
			...ORDER_TYPE_ENUM[2],
			icon: <DeliveryDiningIcon sx={{ color: 'rgba(243, 101, 34)' }} />,
		},
	];
	const handleClickOption = (orderTypeId) => {
		handleChangeOrderType(ORDER_TYPE_ENUM[orderTypeId]);
	};
	useEffect(() => {
		console.log(ordertype);
	}, [ordertype]);
	return (
		<div className='ordertype order-section'>
			<h3 className='heading-title'>Hình thức giao hàng</h3>
			<div className='ordertype__list'>
				{ordertype.id != 2 ? (
					<StyledButton
						sx={{
							padding: {
								xs: '0.5rem 5px',
								md: '0.5rem 3rem',
							},
						}}
						onClick={() => {
							handleClickOption(2);
						}}>
						<span className='ordertype__inner'>
							<span>{orderTypeList[2].name}</span>
						</span>
					</StyledButton>
				) : (
					<StyledButton
						sx={{
							background: 'rgba(243, 101, 34)',
							color: 'white',
							padding: {
								xs: '0.5rem 5px',

								md: '0.5rem 3rem',
							},
						}}
						onClick={() => {
							// handleClickOption(2);
						}}>
						<span className='ordertype__inner'>
							<span>{orderTypeList[2].name}</span>
						</span>
					</StyledButton>
				)}

				{!ableToChangeOrderType ? (
					<Tooltip
						title={<span style={{ fontSize: '16px' }}>Chỉ áp dụng cho đơn hàng có sản phẩm thuộc 1 cửa hàng</span>}
						placement='top'
						arrow>
						<span>
							<StyledButton
								sx={{
									padding: {
										xs: '0.5rem 5px',

										md: '0.5rem 3rem',
									},
								}}
								onClick={() => {
									// handleClickOption(1);
								}}
								disabled>
								<span className='ordertype__inner'>
									<span>{orderTypeList[1].name}</span>
								</span>
							</StyledButton>
						</span>
					</Tooltip>
				) : (
					<>
						{ordertype.id != 1 ? (
							<StyledButton
								sx={{
									padding: {
										xs: '0.5rem 5px',

										md: '0.5rem 3rem',
									},
								}}
								onClick={() => {
									handleClickOption(1);
								}}>
								<span className='ordertype__inner'>
									<span>{orderTypeList[1].name}</span>
								</span>
							</StyledButton>
						) : (
							<StyledButton
								sx={{
									background: 'rgba(243, 101, 34)',
									color: 'white',
									padding: {
										xs: '0.5rem 5px',

										md: '0.5rem 3rem',
									},
								}}
								onClick={() => {
									// handleClickOption(1);
								}}>
								<span className='ordertype__inner'>
									<span>{orderTypeList[1].name}</span>
								</span>
							</StyledButton>
						)}
					</>
				)}
			</div>
		</div>
	);
}
