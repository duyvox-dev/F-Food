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
const StyledTab = styled(Tab)({
	color: 'black',
});
export default function OrderList({ orderList = {} }) {
	const [tab, setTab] = useState('1');
	const handleChangeTab = (event, newTab) => {
		setTab(newTab);
	};
	useEffect(() => {
		console.log(orderList);
	}, [orderList]);
	return (
		<Box sx={{ width: '100%', typography: 'body1', marginTop: '1rem' }}>
			<TabContext value={tab}>
				<Box
					sx={{
						borderBottom: 1,
						borderColor: 'divider',
					}}>
					<TabList onChange={handleChangeTab} aria-label='' centered>
						<StyledTab label='Chờ xác nhận' value='1' />
						<StyledTab label='Chờ lấy hàng' value='2' />
						<StyledTab label='Đang vận chuyển' value='3' />
						<StyledTab label='Đã giao' value='4' />
						<StyledTab label='Đã huỷ' value='5' />
					</TabList>
				</Box>
				<TabPanel value='1'>
					{orderList?.pending?.orderInfo.map((order) => {
						return <OrderItem orderData={order}></OrderItem>;
					})}
				</TabPanel>
				<TabPanel value='2'>
					{orderList?.assign?.orderInfo.map((order) => {
						return <OrderItem orderData={order}></OrderItem>;
					})}
				</TabPanel>
				<TabPanel value='3'>
					{orderList?.delivery?.orderInfo.map((order) => {
						return <OrderItem orderData={order}></OrderItem>;
					})}
				</TabPanel>
				<TabPanel value='4'>
					{orderList?.finish?.orderInfo.map((order) => {
						return <OrderItem orderData={order}></OrderItem>;
					})}
				</TabPanel>
				<TabPanel value='5'>
					<>
						{orderList?.cancel?.orderInfo.map((order) => {
							return <OrderItem orderData={order}></OrderItem>;
						})}
					</>
					<>
						{orderList?.storeCancel?.orderInfo.map((order) => {
							return <OrderItem orderData={order}></OrderItem>;
						})}
					</>
				</TabPanel>
			</TabContext>
		</Box>
	);
}
