import React, { useState, useEffect } from 'react';
import './OrderPage.scss';
import { Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import CartList from './Cart/CartList';
import OrderInfo from './OrderInfo';
import Checkout from './Checkout/Checkout';
import OrderLocation from './OrderLocation';
import FeeList from './Fee/FeeList';
import QuantityModal from '../../components/Modal/QuantityModal';
import LocationModal from './Modal/LocationModal';
import PersonalInfoModal from '../../components/Modal/PersonalInfoModal';
import ConfirmModal from '../../components/Modal/ConfirmModal';
import useModal from '../../hooks/useModal';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { setErrorMessage, setSuccessMessage } from '../../redux/messageSlice';
import { createOrder, resetOrderState } from '../../redux/orderSlice';
import { calculateShippingFee, ORDER_TYPE_ENUM, groupCarts } from '../../util/order.util';
import { setCurrentRoom, getRoomList } from '../../redux/settingSlice';
import { Link } from 'react-router-dom';
import { setTotalQuantity } from '../../redux/cartSlice';
import { Player } from '@lottiefiles/react-lottie-player';

import orderSuccessAnimation from '../../assets/animations/order-success.json';
import orderFailAnimation from '../../assets/animations/order-fail.json';
import OrderType from './OrderType/OrderType';
const StyledButton = styled(Button)({
	background: '#fcf6f6',
	border: '2px solid rgba(243, 101, 34)',
	color: 'rgba(243, 101, 34)',
	// backgroundColor: 'rgba(243, 101, 34)',
	padding: '0.5rem 3rem',
	'&:hover': { backgroundColor: 'rgba(243, 101, 34)', color: 'white' },
	'&:disabled': {
		// backgroundColor: "gray",
		background: '#fcf6f6',
		border: '2px solid rgba(243, 101, 34)',
		color: 'rgba(243, 101, 34)',
		opacity: 0.3,
	},
	'&:active': {
		backgroundColor: 'rgba(243, 101, 34)',
	},
});
export default function OrderPage() {
	const mockDataFee = {
		originCost: {
			name: 'Tạm tính',
			cost: 10000,
		},
		discountCost: {
			name: 'Sau khuyến mãi',
			cost: 9000,
		},

		shippingCost: {
			name: 'Phí giao hàng',
			cost: 8000,
		},
	};

	// -----------------------------------------
	const dispatch = useDispatch();
	// modals
	const [quantityModal, openQuantityModal, closeQuantityModal] = useModal();
	const [locationModal, openLocationModal, closeLocationModal] = useModal();
	const [userModal, openUserModal, closeUserModal] = useModal();
	const [confirmModal, openConfirmModal, closeConfirmModal] = useModal();
	//
	// Room
	const { roomList, currentRoom, currentTimeSlot } = useSelector((state) => state.setting);
	// Cost/ fees
	const [fees, setFees] = useState(mockDataFee);
	const [shippingFee, setShippingFee] = useState(0);
	const [numOfStoresInCart, setNumOfStoresInCart] = useState(1);
	//
	const [selectedCart, setSelectedCart] = useState({});
	const { carts, totalAmount } = useSelector((state) => state.cart);
	const { orderSuccess, orderFail } = useSelector((state) => state.order);
	const [orderType, setOrderType] = useState(ORDER_TYPE_ENUM[2]);
	const [ableToChangeOrderType, setAbleToChangeOrderType] = useState(true);
	const { user } = useSelector((state) => state.auth);
	const [groupedCarts, setGroupedCarts] = useState({});
	const [isValidCartItem, setIsValidCartItem] = useState(true);
	// --------------------------------------------------

	const calculateFee = (shippingFee) => {
		let discountCost = 0;
		let originCost = 0;

		carts.map((cartItem) => {
			originCost += cartItem?.product.price * cartItem.quantity;
		});
		discountCost = originCost;
		return {
			originCost: {
				name: 'Tạm tính',
				cost: originCost,
			},
			discountCost: {
				name: 'Sau khuyến mãi',
				cost: discountCost,
			},

			shippingCost: {
				name: 'Vận chuyển',
				cost: shippingFee,
			},
		};
	};

	const handleChangeQuantity = (cart) => {
		setSelectedCart(cart);
	};
	const handleChangeRoom = (location) => {
		dispatch(setCurrentRoom(location));
		closeLocationModal();
	};

	const handlePrePlaceOrder = () => {
		if (_.isEmpty(user)) {
			dispatch(setErrorMessage('Vui lòng đăng nhập.'));
		} else if (_.isEmpty(user.phone)) {
			dispatch(setErrorMessage('Vui lòng cập nhật số điện thoại.'));
		} else if (!isValidCartItem) {
			dispatch(setErrorMessage('Vui lòng xoá những sản phẩm không khả dụng.'));
		} else {
			openConfirmModal();
		}
	};
	const handleChangeOrderType = (newOrderType) => {
		setOrderType(newOrderType);
		dispatch(setSuccessMessage('Đổi hình thức giao hàng thành công'));
	};
	useEffect(() => {
		if (_.isEmpty(selectedCart) === false) {
			openQuantityModal();
		}
	}, [selectedCart]);
	useEffect(() => {
		if (!quantityModal) {
			setSelectedCart({});
		}
	}, [quantityModal]);
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
	// iplementing
	const getOrderDetails = () => {
		const orderDetails = carts.map((cart) => {
			const finalAmount = cart.product.price * cart.quantity;
			return {
				productInMenuId: cart.product.productMenuId,
				quantity: cart.quantity,
				finalAmount: finalAmount,
				supplierStoreId: cart.product.storeId,
				timeSlotId: cart.product.timeSlotId,
			};
		});
		return orderDetails;
	};
	const handlePlaceOrder = () => {
		const orderDetails = getOrderDetails();
		const roomId = orderType.id == 1 ? null : currentRoom.id;

		const orderData = {
			totalAmount: fees.originCost.cost,
			deliveryPhone: user.phone,
			orderType: orderType.id,
			timeSlotId: currentTimeSlot.id,
			roomId: roomId,
			customerId: user.id,
			orderDetails: orderDetails,
		};
		dispatch(createOrder(orderData));
	};

	useEffect(() => {
		//
		const newGroupedCart = groupCarts(carts);
		setGroupedCarts(newGroupedCart);
		const newNumberOfStoresInCart = Object.keys(newGroupedCart).length;
		setNumOfStoresInCart(newNumberOfStoresInCart);
		if (numOfStoresInCart > 1) {
			setOrderType(ORDER_TYPE_ENUM[2]);
		}
		//
		setShippingFee(calculateShippingFee(numOfStoresInCart, orderType?.id));
		const totalFee = calculateFee(shippingFee);
		setFees(totalFee);
		//
		setIsValidCartItem(true);
		carts.forEach((cart) => {
			if (cart.product.timeSlotId != currentTimeSlot.id) setIsValidCartItem(false);
		});
	}, [carts]);

	useEffect(() => {
		setShippingFee(calculateShippingFee(numOfStoresInCart, orderType?.id));
	}, [orderType]);
	useEffect(() => {
		const totalFee = calculateFee(shippingFee);
		setFees(totalFee);
	}, [shippingFee]);
	useEffect(() => {
		if (_.isEmpty(roomList) == false && _.isEmpty(currentRoom)) {
			dispatch(setCurrentRoom(roomList[0]));
		}
	}, [roomList]);
	useEffect(() => {
		if (numOfStoresInCart > 1) {
			setAbleToChangeOrderType(false);
		} else setAbleToChangeOrderType(true);
	}, [numOfStoresInCart]);
	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(resetOrderState());
		dispatch(getRoomList());
	}, []);
	if (orderSuccess == true || orderFail == true)
		return (
			<Container
				maxWidth='lg'
				sx={{
					// background: '#F7F7F7',

					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					padding: '1rem 0',
				}}>
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
					{orderSuccess ? (
						<>
							<Player autoplay loop src={orderSuccessAnimation} style={{ height: '300px', width: '300px' }}></Player>
							<h1>Đặt hàng thành công.</h1>
							<Link to='/order-history' style={{ textDecoration: 'none' }}>
								<StyledButton>Xem đơn hàng</StyledButton>
							</Link>
						</>
					) : (
						<>
							<Player autoplay loop src={orderFailAnimation} style={{ height: '300px', width: '300px' }}></Player>
							<h1>Đặt hàng thất bại.</h1>
							<Link to='/' style={{ textDecoration: 'none' }}>
								<StyledButton>Quay lại trang chủ</StyledButton>
							</Link>
						</>
					)}
				</div>
			</Container>
		);
	else if (_.isEmpty(carts))
		return (
			<Container
				maxWidth='lg'
				sx={{
					// background: '#F7F7F7',

					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					padding: '1rem 0',
				}}>
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
					<h1>Giỏ hàng trống</h1>
					<Link to='/' style={{ textDecoration: 'none' }}>
						<StyledButton>Tiếp tục mua sắm</StyledButton>
					</Link>
				</div>
			</Container>
		);
	return (
		<>
			{/* Modals */}
			<QuantityModal modalVisible={quantityModal} closeModal={closeQuantityModal} cartItem={selectedCart} />
			<LocationModal
				modalVisible={locationModal}
				closeModal={closeLocationModal}
				locationList={roomList}
				defaultLocation={currentRoom}
				handleChangeLocation={handleChangeRoom}
			/>
			<PersonalInfoModal modalVisible={userModal} closeModal={closeUserModal} user={user} />
			<ConfirmModal modalVisible={confirmModal} closeModal={closeConfirmModal} confirm={handlePlaceOrder} />
			{/* -------------------------------- */}
			<Container
				maxWidth='lg'
				sx={{
					background: '#F7F7F7',

					padding: '1rem 0',
				}}>
				<Typography variant='h4' align='center' fontWeight='bold'>
					Đơn hàng của bạn
				</Typography>
				<OrderLocation openLocationModal={openLocationModal} location={currentRoom} orderType={orderType.id} />
				<OrderInfo user={user} openUserModal={openUserModal} />
				<CartList groupedCarts={groupedCarts} handleChangeQuantity={handleChangeQuantity} />
				<FeeList fees={fees}></FeeList>
				<OrderType
					handleChangeOrderType={handleChangeOrderType}
					ordertype={orderType}
					ableToChangeOrderType={ableToChangeOrderType}
				/>
				<Checkout fees={fees} totalAmount={totalAmount} placeOrder={handlePrePlaceOrder} />
			</Container>
		</>
	);
}
