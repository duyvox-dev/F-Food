import React from 'react';
import { useState } from 'react';
import './Modal.scss';
import _ from 'lodash';
import Button from '@mui/material/Button';
import BasicModal from '../../../components/Modal/BasicModal';
import TextField from '@mui/material/TextField';
import { formatPhoneNumber } from '../../../util/string.util';
export default function PersonalInfoModal({
	modalVisible = false,
	closeModal = () => {},
	user = {},
	handleChangeUserPhoneNumber = () => {},
}) {
	const [currentPhone, setCurrentPhoneNumber] = useState(user?.phone);
	const handleSubmitNewPhoneNumber = () => {
		handleChangeUserPhoneNumber(currentPhone);
	};
	const checkUserForm = () => {
		return true;
	};
	return (
		<BasicModal modalVisible={modalVisible} closeModal={closeModal}>
			<span className='modal-heading'>Thay đổi thông tin người nhận</span>
			<div className='modal-content personal-modal-content'>
				<div>
					<form action=''>
						<TextField label='Họ tên' disabled fullWidth defaultValue={user?.name} />
						<TextField
							label='Số điện thoại'
							required
							fullWidth
							placeholder={formatPhoneNumber('0123456789')}
							defaultValue={formatPhoneNumber(user?.phone)}
							sx={{ margin: '1rem 0' }}
							helperText='Vui lòng nhập đúng định dạng số điện thoại'
						/>
					</form>
				</div>
				<Button
					variant='contained'
					sx={{ width: { xs: '80%', sm: '50%' }, boxShadow: 'inherit', margin: '0 auto', display: 'block' }}
					onClick={() => {
						handleSubmitNewPhoneNumber();
					}}
					disabled={!checkUserForm()}>
					Cập nhật thông tin
				</Button>
			</div>
		</BasicModal>
	);
}
