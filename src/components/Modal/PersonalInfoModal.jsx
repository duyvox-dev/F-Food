import React from 'react';
import { useState } from 'react';
import './Modal.scss';
import _ from 'lodash';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import { useEffect } from 'react';
import BasicModal from './BasicModal';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setUpdateUserInfoSuccess, updateUserPhone } from '../../redux/authSlice';

const ModalButton = styled(Button)({
	display: 'block',
	color: 'white',
	backgroundColor: 'rgba(243, 101, 34)',
	'&:hover': { backgroundColor: 'rgba(243, 101, 34)' },
});
export default function PersonalInfoModal({ modalVisible = false, closeModal = () => {} }) {
	const dispatch = useDispatch();
	const { user, updateUserInfoSuccess } = useSelector((state) => state.auth);
	const [currentPhone, setCurrentPhoneNumber] = useState(user?.phone);
	const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);
	const handleSubmitNewPhoneNumber = () => {
		dispatch(updateUserPhone({ user, currentPhone }));
	};

	const isValidPhone = (phoneNumber) => {
		const pattern = /^0\d{9}$/;
		return pattern.test(phoneNumber);
	};
	useEffect(() => {
		if (isValidPhone(currentPhone)) setIsValidPhoneNumber(true);
		else setIsValidPhoneNumber(false);
	}, [currentPhone]);
	useEffect(() => {
		if (updateUserInfoSuccess == true) {
			dispatch(setUpdateUserInfoSuccess(false));
			closeModal();
		}
	}, [updateUserInfoSuccess]);
	useEffect(() => {
		if (isValidPhone(user?.phone)) setIsValidPhoneNumber(true);
		else setIsValidPhoneNumber(false);
	}, [user]);
	return (
		<BasicModal modalVisible={modalVisible} closeModal={closeModal}>
			<span className='modal-heading'>Thay đổi thông tin cá nhân</span>
			<div className='modal-content personal-modal-content'>
				<div>
					<form action=''>
						<TextField label='Họ tên' variant='standard' disabled fullWidth defaultValue={user?.name} />
						<TextField
							label='Email'
							variant='standard'
							disabled
							fullWidth
							defaultValue={user?.email}
							sx={{ marginTop: '1rem' }}
						/>
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
				<ModalButton
					variant='contained'
					sx={{ width: { xs: '80%', sm: '50%' }, margin: '0 auto' }}
					onClick={() => {
						handleSubmitNewPhoneNumber();
					}}
					disabled={!isValidPhoneNumber}>
					Cập nhật thông tin
				</ModalButton>
			</div>
		</BasicModal>
	);
}
