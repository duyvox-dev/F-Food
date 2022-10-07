import React from 'react';
import { useState } from 'react';
import './Modal.scss';
import _ from 'lodash';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import { useEffect } from 'react';
import BasicModal from '../../../Components/Modal/BasicModal';
export default function PersonalInfoModal({
	modalVisible = false,
	closeModal = () => {},
	user = {},
	handleChangeUserPhoneNumber = () => {},
}) {
	const [currentPhone, setCurrentPhoneNumber] = useState(user?.phone);
	const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);
	const handleSubmitNewPhoneNumber = () => {
		handleChangeUserPhoneNumber(currentPhone);
	};

	const isValidPhone = (phoneNumber) => {
		const pattern = /^0\d{9}$/;
		return pattern.test(phoneNumber);
	};
	useEffect(() => {
		if (isValidPhone(currentPhone)) setIsValidPhoneNumber(true);
		else setIsValidPhoneNumber(false);
	}, [currentPhone]);
	return (
		<BasicModal modalVisible={modalVisible} closeModal={closeModal}>
			<span className='modal-heading'>Thay đổi thông tin người nhận</span>
			<div className='modal-content personal-modal-content'>
				<div>
					<form action=''>
						<TextField label='Họ tên' variant='standard' disabled fullWidth defaultValue={user?.name} />
						<TextField
							label='Số điện thoại'
							required
							fullWidth
							variant='standard'
							placeholder={'0123456789'}
							defaultValue={user?.phone}
							sx={{ margin: '1rem 0' }}
							value={currentPhone}
							onChange={(e) => {
								setCurrentPhoneNumber(e.target.value);
							}}
							error={!isValidPhoneNumber}
							helperText={!isValidPhoneNumber ? 'Vui lòng nhập đúng định dạng số điện thoại' : ''}
						/>
					</form>
				</div>
				<Button
					variant='contained'
					sx={{ width: { xs: '80%', sm: '50%' }, boxShadow: 'inherit', margin: '0 auto', display: 'block' }}
					onClick={() => {
						handleSubmitNewPhoneNumber();
					}}
					disabled={!isValidPhoneNumber}>
					Cập nhật thông tin
				</Button>
			</div>
		</BasicModal>
	);
}
