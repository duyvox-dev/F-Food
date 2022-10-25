import React, { useEffect } from 'react';
import IconButton from '@mui/material/IconButton';

import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useDispatch, useSelector } from 'react-redux';
import { calculateToTalAmount, setTotalQuantity } from '../../redux/cartSlice';
const AddToCartButton = styled(IconButton)({
	// display: 'flex',
	color: 'white',
	backgroundColor: 'rgba(243, 101, 34)',
	width: '50px',
	height: '50px',
	padding: 0,
	fontSize: '17px',
	position: 'relative',
	zIndex: '100',
	boxShadow: '0px 0px 20px rgb(0 0 0 / 15%)',
	'&:hover': { backgroundColor: 'rgba(243, 101, 34)' },
});
export default function CartBtn() {
	const dispatch = useDispatch();
	const { totalAmount, carts } = useSelector((state) => state.cart);
	const calculateToTalAmount = (carts) => {
		return carts?.reduce((sum, cart) => {
			return sum + cart.quantity;
		}, 0);
	};
	useEffect(() => {
		if (carts.length > 0) {
			dispatch(setTotalQuantity(calculateToTalAmount(carts)));
		}
	}, [carts]);
	return (
		<Link to='/order' style={{ position: 'fixed', bottom: '1rem', right: '2rem', zIndex: '100' }}>
			<AddToCartButton>
				<LocalMallIcon></LocalMallIcon>
				<span
					style={{
						position: 'absolute',
						top: '-9px',
						right: '-13px',
						display: 'flex',
						justifyContent: 'center',
						alignItem: 'center',
						background: 'white',
						width: '20px',
						height: '20px',
						padding: '5px',
						color: 'rgba(243, 101, 34)',
						border: '1px solid rgba(243, 101, 34)',
						borderRadius: '999px',
						zIndex: '100',
					}}>
					{totalAmount}
				</span>
			</AddToCartButton>
		</Link>
	);
}
