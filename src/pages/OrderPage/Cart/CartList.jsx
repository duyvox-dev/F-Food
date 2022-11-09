import React from 'react';
import CartItem from './CartItem';
import './Cart.scss';
import { removeCart } from '../../../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { useConfirm } from 'material-ui-confirm';
import { setSuccessMessage } from '../../../redux/messageSlice';
import StoreIcon from '@mui/icons-material/Store';
export default function CartList({ groupedCarts = {}, isValidCartItem = true }) {
	const dispatch = useDispatch();
	const confirm = useConfirm();
	const handleRemoveAllCart = async () => {
		try {
			const res = await confirm({
				title: 'Xác nhận xoá sản phẩm',
				description: `Bạn có muốn xoá toàn bộ sản phẩm?`,
			});
			dispatch(removeCart());
			dispatch(setSuccessMessage('Xoá giỏ hàng thành công.'));
		} catch (err) {}
	};
	return (
		<div className='cart order-section'>
			<div className='heading-flex'>
				<h3 className='heading-title'>Tóm tắt đơn hàng</h3>
				<span
					className='heading-change'
					onClick={() => {
						handleRemoveAllCart();
					}}
					style={{ color: 'red' }}>
					Xoá tất cả
				</span>
			</div>

			<div className='cart-list'>
				{Object.keys(groupedCarts).map((key, index) => {
					return (
						<div key={index} className='cart__store'>
							<h3 className='cart__store-name'>
								<StoreIcon sx={{ color: 'rgba(243, 101, 34)' }}></StoreIcon>
								<span>{key}</span>
							</h3>
							{groupedCarts[key]?.map((cart, index) => {
								return <CartItem key={index} cart={cart} isValidCartItem={isValidCartItem}></CartItem>;
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
}
