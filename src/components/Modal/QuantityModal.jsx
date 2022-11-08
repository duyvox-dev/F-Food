import React from 'react';
import BasicModal from './BasicModal';
import { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeQuantityCart } from '../../redux/cartSlice';
import Tooltip from '@mui/material/Tooltip';

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
		const newQuantity = Math.max(1, currentQuantity - 1);
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
					{currentQuantity <= 1 ? (
						<>
							<Tooltip title={<span style={{ fontSize: '16px' }}>Số lượng ít nhất là 1</span>}>
								<Button
									variant='outlined'
									onClick={() => {
										decQuantity();
									}}
									disabled>
									-
								</Button>
							</Tooltip>
						</>
					) : (
						<>
							<Button
								variant='outlined'
								onClick={() => {
									decQuantity();
								}}>
								-
							</Button>
						</>
					)}

					<DisabledButton variant='outlined' disabled>
						{currentQuantity}
					</DisabledButton>

					{currentQuantity >= 10 ? (
						<>
							<Tooltip title={<span style={{ fontSize: '16px' }}>Giới hạn 10 sản phẩm</span>}>
								<Button
									variant='outlined'
									disabled
									onClick={() => {
										incQuantity();
									}}>
									+
								</Button>
							</Tooltip>
						</>
					) : (
						<>
							<Button
								variant='outlined'
								onClick={() => {
									incQuantity();
								}}>
								+
							</Button>
						</>
					)}
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
