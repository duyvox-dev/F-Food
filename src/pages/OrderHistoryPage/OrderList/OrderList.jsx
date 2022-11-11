import React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './OrderList.scss';
import { styled } from '@mui/material';
import OrderItem from '../OrderItem/OrderItem';
import { useDispatch, useSelector } from 'react-redux';
import { getListOrderByOrderStatus } from '../../../redux/orderSlice';
import { Player } from '@lottiefiles/react-lottie-player';
import noOrderFound from '../../../assets/animations/no-order-found.json';
import _ from 'lodash';
const StyledTab = styled(Tab)({
	color: 'black',
});
export default function OrderList({}) {
	const dispatch = useDispatch();
	const { orderDetailList } = useSelector((state) => state.order);

	const [tab, setTab] = useState('2');
	const handleChangeTab = (event, newTab) => {
		console.log(Number.parseInt(newTab));
		setTab(newTab);
		dispatch(getListOrderByOrderStatus(Number.parseInt(newTab)));
	};
	useEffect(() => {
		dispatch(getListOrderByOrderStatus(Number.parseInt(2)));
	}, []);
	return (
		<Box sx={{ width: '100%', typography: 'body1', marginTop: '1rem' }}>
			<TabContext value={tab}>
				<Box
					sx={{
						borderBottom: 1,
						borderColor: 'divider',
					}}>
					<TabList onChange={handleChangeTab} aria-label='' centered>
						<StyledTab label='Chờ xác nhận' value='2' />
						<StyledTab label='Chờ lấy hàng' value='3' />
						<StyledTab label='Đã giao' value='4' />
						<StyledTab label='Đã huỷ' value='1' />
					</TabList>
				</Box>
				<TabPanel value='1'>
					{_.isEmpty(orderDetailList) ? (
						<>
							<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
								<Player autoplay loop src={noOrderFound} style={{ height: '300px', width: '300px' }}></Player>
								<h1>Chưa có đơn hàng</h1>
							</div>
						</>
					) : (
						<>
							{orderDetailList?.map((order) => {
								return <OrderItem orderData={order}></OrderItem>;
							})}
						</>
					)}
				</TabPanel>
				<TabPanel value='2'>
					{_.isEmpty(orderDetailList) ? (
						<>
							<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
								<Player autoplay loop src={noOrderFound} style={{ height: '300px', width: '300px' }}></Player>
								<h1>Chưa có đơn hàng</h1>
							</div>
						</>
					) : (
						<>
							{orderDetailList?.map((order) => {
								return <OrderItem orderData={order}></OrderItem>;
							})}
						</>
					)}
				</TabPanel>
				<TabPanel value='3'>
					{_.isEmpty(orderDetailList) ? (
						<>
							<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
								<Player autoplay loop src={noOrderFound} style={{ height: '300px', width: '300px' }}></Player>
								<h1>Chưa có đơn hàng</h1>
							</div>
						</>
					) : (
						<>
							{orderDetailList?.map((order) => {
								return <OrderItem orderData={order}></OrderItem>;
							})}
						</>
					)}
				</TabPanel>
				<TabPanel value='4'>
					{_.isEmpty(orderDetailList) ? (
						<>
							<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
								<Player autoplay loop src={noOrderFound} style={{ height: '300px', width: '300px' }}></Player>
								<h1>Chưa có đơn hàng</h1>
							</div>
						</>
					) : (
						<>
							{orderDetailList?.map((order) => {
								return <OrderItem orderData={order}></OrderItem>;
							})}
						</>
					)}
				</TabPanel>
				<TabPanel value='5'>
					<>
						{_.isEmpty(orderDetailList) ? (
							<>
								<div
									style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
									<Player autoplay loop src={noOrderFound} style={{ height: '300px', width: '300px' }}></Player>
									<h1>Chưa có đơn hàng</h1>
								</div>
							</>
						) : (
							<>
								{orderDetailList?.map((order) => {
									return <OrderItem orderData={order}></OrderItem>;
								})}
							</>
						)}
					</>
				</TabPanel>
			</TabContext>
		</Box>
	);
}
