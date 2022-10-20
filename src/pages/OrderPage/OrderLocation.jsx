import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import { useSelector } from 'react-redux';
import moment from "moment"
export default function OrderLocation({ openLocationModal = () => { }, location = {} }) {
	const { currentTimeSlot } = useSelector((state) => state.menu)
	return (
		<div className='order-section'>
			<div className='heading-flex'>
				<h3 className='heading-title'>Giao tới</h3>
				<span
					className='heading-change'
					onClick={() => {
						openLocationModal();
					}}>
					Đổi địa điểm
				</span>
			</div>
			<div className='box-content' elevation={0}>
				<span className='box-content-heading'>{location?.label}</span>
				<div>
					<span className='box-content-title'>Thời gian giao hàng</span>
					<span className='box-content-info'>{moment(`2015-06-17 ${currentTimeSlot.arriveTime}`).format('HH:mm')}
						-
						{moment(`2015-06-17 ${currentTimeSlot.checkoutTime}`).format('HH:mm')}</span>
				</div>
			</div>
		</div>
	);
}
