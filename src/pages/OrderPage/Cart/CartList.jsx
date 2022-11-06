import React from 'react';
import CartItem from './CartItem';
import './Cart.scss';
import { removeCart } from '../../../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { useConfirm } from 'material-ui-confirm';
import { setSuccessMessage } from '../../../redux/messageSlice';
export default function CartList({ carts = [] }) {
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
				{carts.map((cart, index) => {
					return <CartItem key={index} cart={cart}></CartItem>;
				})}
			</div>
		</div>
	);
}
