import React from 'react';
import BasicModal from './BasicModal';
import { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeQuantityCart } from '../../redux/cartSlice';
const ModalButton = styled(Button)({
	display: 'block',
	color: 'white',
	backgroundColor: 'rgba(243, 101, 34)',
	'&:hover': { backgroundColor: 'rgba(243, 101, 34)' },
});
const DisabledButton = styled(Button)({
	'&:disabled': {
		color: 'black',
		borderColor: 'primary',
	},
});
export default function QuantityModal({ modalVisible = false, closeModal = () => {}, cartItem = {} }) {
	const dispatch = useDispatch();
	const [currentQuantity, setCurrentQuantity] = useState(cartItem?.quantity);
	const decQuantity = () => {
		const newQuantity = Math.max(0, currentQuantity - 1);
		setCurrentQuantity(newQuantity);
	};
	useEffect(() => {
		setCurrentQuantity(cartItem?.quantity);
	}, [cartItem?.quantity]);
	const incQuantity = () => {
		const newQuantity = currentQuantity + 1;
		setCurrentQuantity(newQuantity);
	};
	const handleChangeQuantity = () => {
		dispatch(
			changeQuantityCart({
				productMenuId: cartItem?.product.productMenuId,
				quantity: currentQuantity,
			})
		);
		closeModal();
	};
	return (
		<BasicModal modalVisible={modalVisible} closeModal={closeModal}>
			<span className='modal-heading'>Cập nhật giỏ hàng</span>
			<div className='modal-content'>
				<span className='modal-title'>{cartItem?.product?.name}</span>
				<ButtonGroup>
					<Button
						variant='outlined'
						onClick={() => {
							decQuantity();
						}}
						disabled={currentQuantity <= 0 ? true : false}>
						-
					</Button>
					<DisabledButton variant='outlined' disabled>
						{currentQuantity}
					</DisabledButton>
					<Button
						variant='outlined'
						onClick={() => {
							incQuantity();
						}}>
						+
					</Button>
				</ButtonGroup>
				<ModalButton
					variant='contained'
					sx={{ width: { xs: '80%', sm: '50%' } }}
					onClick={() => {
						handleChangeQuantity();
					}}>
					Cập nhật số lượng
				</ModalButton>
			</div>
		</BasicModal>
	);
}
