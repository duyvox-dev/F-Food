import React from 'react';
import BasicModal from './BasicModal';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
const ConfirmButton = styled(Button)({
	display: 'block',
	color: 'white',
	backgroundColor: 'rgba(243, 101, 34)',
	'&:hover': { backgroundColor: 'rgba(243, 101, 34)' },
});
const CancelButton = styled(Button)({
	display: 'block',
	color: '#3e3e3e',
	borderColor: '#3e3e3e',
});
export default function ConfirmModal({ modalVisible = false, closeModal = () => {}, confirm = () => {} }) {
	return (
		<BasicModal modalVisible={modalVisible} closeModal={closeModal}>
			{/* <span className='modal-heading'>Xác nhận đặt hàng</span> */}
			<div className='modal-content'>
				<span className='modal-title' style={{ color: 'black' }}>
					Xác nhận đặt hàng
				</span>
				<div
					style={{
						marginTop: '1rem',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-end',
						gap: '1rem',
					}}>
					<CancelButton
						variant='outlined'
						onClick={() => {
							closeModal();
						}}>
						Huỷ
					</CancelButton>
					<ConfirmButton
						variant='contained'
						onClick={() => {
							confirm();
							closeModal();
						}}>
						Xác nhận
					</ConfirmButton>
				</div>
			</div>
		</BasicModal>
	);
}
