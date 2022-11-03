import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { dayConstants } from '../../constansts/constants';
export default function OrderLocation({ openLocationModal = () => {}, location = {}, orderType = 2 }) {
	const { currentTimeSlot, dayString } = useSelector((state) => state.setting);
	return (
		<div className='order-section'>
			<div className='heading-flex'>
				<h3 className='heading-title'>Giao tới</h3>
				{orderType == 2 ? (
					<span
						className='heading-change'
						onClick={() => {
							openLocationModal();
						}}>
						Đổi địa điểm
					</span>
				) : (
					<></>
				)}
			</div>
			<div className='box-content' elevation={0}>
				<span className='box-content-heading'>
					{orderType == 2 ? (
						<span
							onClick={() => {
								openLocationModal();
							}}>
							{location?.roomNumber}
						</span>
					) : (
						'Nhận tại cửa hàng'
					)}
				</span>
				<div>
					<span className='box-content-title'>Thời gian giao hàng</span>
					<span className='box-content-info'>
						{moment(`2015-06-17 ${currentTimeSlot.arriveTime}`).format('HH:mm')}-
						{moment(`2015-06-17 ${currentTimeSlot.checkoutTime}`).format('HH:mm')}{' '}
						<span className='highlight'>{dayString == dayConstants.NGAY_MAI ? dayString : ''}</span>
					</span>
				</div>
			</div>
		</div>
	);
}
