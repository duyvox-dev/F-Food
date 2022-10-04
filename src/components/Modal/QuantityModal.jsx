import React from 'react';
import BasicModal from './BasicModal';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';

const DisabledButton = styled(Button)({
	'&:disabled': {
		color: 'black',
		borderColor: 'primary',
	},
});
export default function QuantityModal({ modalVisible = false, closeModal = () => {}, cartItem = {} }) {
	return (
		<BasicModal modalVisible={modalVisible} closeModal={closeModal}>
			<span className='modal-heading'>Cập nhật giỏ hàng</span>
			<div className='modal-content'>
				<span className='modal-title'>{cartItem?.name}</span>
				<ButtonGroup>
					<Button variant='outlined'>-</Button>
					<DisabledButton variant='outlined' disabled>
						{cartItem?.quantity}
					</DisabledButton>
					<Button variant='outlined'>+</Button>
				</ButtonGroup>
				<Button variant='contained' sx={{ width: { xs: '80%', sm: '50%' } }}>
					Cập nhật giỏ hàng
				</Button>
			</div>
		</BasicModal>
	);
}
