import React, { useState, useEffect } from 'react';
import './OrderPage.scss';
import { Container, Typography } from '@mui/material';
import CartList from './Cart/CartList';
import OrderInfo from './OrderInfo';
import Checkout from './Checkout/Checkout';
import OrderLocation from './OrderLocation';
import FeeList from './Fee/FeeList';
import QuantityModal from '../../components/Modal/QuantityModal';
import LocationModal from './Modal/LocationModal';
import PersonalInfoModal from '../../components/Modal/PersonalInfoModal';
import useModal from '../../hooks/useModal';
import _ from 'lodash';
import { useSelector } from 'react-redux';
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
	const mockDataCart = [
		{
			id: 1,
			name: 'Bánh chuối',
			quantity: 10,
			status: 'available',
			image:
				'https://7rewards-images-s3-ap-southeast-1-amazonaws.cdn.vccloud.vn/production/product_uoms/images/5042_1627615937_original.jpg?1650293797',
			price: 10000,
		},
		{
			id: 2,
			name: 'Combo chuối nho',
			quantity: 10,
			status: 'available',
			price: 50000,
			discountPrice: 40000,

			image:
				'https://image.sevensystem.vn/crop?width=1043&height=1043&type=jpeg&url=https://ceph-external.sevensystem.vn/promotion-image/promo_5564_1664357789659.jpg?1664357789709',
		},
		{
			id: 3,
			name: 'Nho',
			quantity: 5,
			status: '',
			price: 20000,
			discountPrice: 10000,
			image:
				'https://image.sevensystem.vn/crop?width=1043&height=1042&type=jpeg&url=https://ceph-external.sevensystem.vn/promotion-image/promo_5408_1664186009325.jpg?1664186009396',
		},
	];
	const mockDataLocation = [
		{
			id: 1,
			label: 'Phòng 202',
		},
		{
			id: 2,
			label: 'Phòng 301',
		},
		{
			id: 3,
			label: 'Phòng 101',
		},
		{
			id: 4,
			label: 'Sảnh trống đồng',
		},
		{
			id: 5,
			label: 'Sân bóng',
		},
		{
			id: 6,
			label: 'Phòng 102',
		},
	];

	// -----------------------------------------
	const { user } = useSelector((state) => state.auth)
	const [fees, setFees] = useState(mockDataFee);
	const [cart, setCart] = useState(mockDataCart);
	const [locationList, setLocationList] = useState(mockDataLocation);
	const [currentLocation, setCurrenLocation] = useState(mockDataLocation[2]);
	const [shippingFee, setShippingFee] = useState(15000);
	const [quantityModal, openQuantityModal, closeQuantityModal] = useModal();
	const [locationModal, openLocationModal, closeLocationModal] = useModal();
	const [userModal, openUserModal, closeUserModal] = useModal();
	const [selectedCart, setSelectedCart] = useState({});
	// --------------------------------------------------
	const calculateFee = (shippingFee) => {
		let discountCost = 0;
		let originCost = 0;

		cart.map((cartItem) => {
			if (cartItem?.discountPrice) {
				discountCost += cartItem?.discountPrice;
			} else {
				discountCost += cartItem?.price;
			}
			originCost += cartItem?.price;
		});
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
	const handleChangeLocation = (location) => {
		setCurrenLocation(location);
		closeLocationModal();
	};

	useEffect(() => {
		const totalFee = calculateFee(shippingFee);
		setFees(totalFee);
	}, [cart]);
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
	return (
		<>
			{/* Modals */}
			<QuantityModal modalVisible={quantityModal} closeModal={closeQuantityModal} cartItem={selectedCart} />
			<LocationModal
				modalVisible={locationModal}
				closeModal={closeLocationModal}
				locationList={locationList}
				defaultLocation={currentLocation}
				handleChangeLocation={handleChangeLocation}
			/>
			<PersonalInfoModal
				modalVisible={userModal}
				closeModal={closeUserModal}
				user={user}
			/>
			{/* -------------------------------- */}
			<Container
				maxWidth='lg'
				sx={{
					background: '#F7F7F7',
					// height: '90vh',
					// overflow: 'scroll',
					padding: '1rem 0',
				}}>
				<Typography variant='h4' align='center' fontWeight='bold'>
					Đơn hàng của bạn
				</Typography>
				<OrderLocation openLocationModal={openLocationModal} location={currentLocation} />
				<OrderInfo user={user} openUserModal={openUserModal} />
				<CartList carts={cart} handleChangeQuantity={handleChangeQuantity} />
				<FeeList fees={fees}></FeeList>
				<Checkout fees={fees} cartList={cart} />
			</Container>
		</>
	);
}
