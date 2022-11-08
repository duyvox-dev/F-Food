import React from 'react';
import { vndCurrencyFormat } from '../../../util/currency.util';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { changeQuantityCart, deleteCart } from '../../../redux/cartSlice';
import { useConfirm } from 'material-ui-confirm';

const DisabledButton = styled(Button)({
	'&:disabled': {
		color: 'black',
		borderColor: 'primary',
	},
});
export default function CartItem({ cart = {} }) {
	const dispatch = useDispatch();
	const confirm = useConfirm();
	const { currentTimeSlot } = useSelector((state) => state.setting);
	const [isValid, setIsValid] = useState(true);
	const handleChangeQuantity = (quantity) => {
		dispatch(
			changeQuantityCart({
				productMenuId: cart?.product.productMenuId,
				quantity: quantity,
			})
		);
	};
	const decQuantity = () => {
		const newQuantity = Math.max(1, cart.quantity - 1);
		handleChangeQuantity(newQuantity);
	};

	const incQuantity = () => {
		const newQuantity = cart.quantity + 1;
		handleChangeQuantity(newQuantity);
	};

	const handleRemoveCartItem = async () => {
		try {
			const res = await confirm({
				title: 'Xác nhận xoá sản phẩm',
				description: `Bạn có muốn xoá sản phẩm ${cart.product.productName}`,
			});
			dispatch(deleteCart(cart));
		} catch (err) {}
	};
	useState(() => {
		if (currentTimeSlot.id != cart.product.timeSlotId) setIsValid(false);
		else setIsValid(true);
	}, [cart]);
	return (
		<div className={`${!isValid ? 'disabled ' : ' '}cart-item`}>
			<div className='cart-image'>
				<img src={cart?.product.image} alt='' />
			</div>
			<div className='cart-info'>
				<span className='cart-name'>{cart?.product.productName}</span>
				{!isValid ? <span className='cart-message'>Sản phẩm không khả dụng trong khung giờ này</span> : <></>}
				<ButtonGroup>
					{cart.quantity <= 1 ? (
						<>
							<Tooltip title={<span style={{ fontSize: '16px' }}>Số lượng ít nhất là 1</span>}>
								<span>
									<Button
										variant='outlined'
										onClick={() => {
											decQuantity();
										}}
										disabled>
										-
									</Button>
								</span>
							</Tooltip>
						</>
					) : (
						<>
							{!isValid ? (
								<Button
									variant='outlined'
									onClick={() => {
										decQuantity();
									}}
									disabled>
									-
								</Button>
							) : (
								<Button
									variant='outlined'
									onClick={() => {
										decQuantity();
									}}>
									-
								</Button>
							)}
						</>
					)}

					<DisabledButton variant='outlined' disabled>
						{cart.quantity}
					</DisabledButton>

					{!isValid ? (
						<Button
							variant='outlined'
							disabled
							onClick={() => {
								incQuantity();
							}}>
							+
						</Button>
					) : (
						<Button
							variant='outlined'
							onClick={() => {
								incQuantity();
							}}>
							+
						</Button>
					)}
				</ButtonGroup>
			</div>
			<div className='price-cost'>
				<span className=''>{vndCurrencyFormat(cart?.product.price)}</span>
				<span
					className='cart-delete'
					onClick={() => {
						handleRemoveCartItem(cart);
					}}>
					Xoá
				</span>
			</div>
		</div>
	);
}
