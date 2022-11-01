import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import { formatPhoneNumber } from '../../util/string.util';
export default function OrderLocation({ user = {}, openUserModal = () => {} }) {
	return (
		<div className='order-section'>
			<div className='heading-flex'>
				<h3 className='heading-title'>Người nhận</h3>
				<span
					className='heading-change'
					onClick={() => {
						openUserModal();
					}}>
					Thay đổi
				</span>
			</div>
			<div className='box-content' elevation={0}>
				<div>
					<span className='box-content-title'>Họ tên</span>
					<span className='box-content-info'>{user?.name}</span>
				</div>
				<div
					onClick={() => {
						openUserModal();
					}}>
					<span className='box-content-title'>Số điện thoại</span>
					<span className='box-content-info'>{formatPhoneNumber(user?.phone)}</span>
				</div>
			</div>
		</div>
	);
}
