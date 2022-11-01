import React, { useState } from 'react';
import { Menu, MenuItem, IconButton } from '@mui/material';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import AssistWalkerIcon from '@mui/icons-material/AssistWalker';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ORDER_TYPE_ENUM } from '../../../util/order.util';
import './OrderType.scss';
const ITEM_HEIGHT = 48;
export default function OrderType({
	handleChangeOrderType = () => {},
	defaultOrderType = {},
	ableToChangeOrderType = true,
}) {
	const orderTypeList = [
		{
			...ORDER_TYPE_ENUM[0],
		},
		{
			...ORDER_TYPE_ENUM[1],
			icon: <AssistWalkerIcon sx={{ color: 'rgba(243, 101, 34)' }} />,
		},
		{
			...ORDER_TYPE_ENUM[2],
			icon: <DeliveryDiningIcon sx={{ color: 'rgba(243, 101, 34)' }} />,
		},
	];
	const [currentOrderType, setCurrentOrderType] = useState(orderTypeList[defaultOrderType.id]);
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClickOption = (event) => {
		const { myValue } = event.currentTarget.dataset;
		setCurrentOrderType(orderTypeList[myValue]);
		handleChangeOrderType(ORDER_TYPE_ENUM[myValue]);
		setAnchorEl(null);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className='ordertype'>
			<span className='ordertype__name'>
				{currentOrderType.icon}
				<span>{currentOrderType.name}</span>
			</span>
			<div>
				{ableToChangeOrderType ? (
					<>
						<IconButton
							aria-label='more'
							id='long-button'
							aria-controls={open ? 'long-menu' : undefined}
							aria-expanded={open ? 'true' : undefined}
							aria-haspopup='true'
							onClick={handleClick}>
							<KeyboardArrowDownIcon />
						</IconButton>
						<Menu
							id='long-menu'
							MenuListProps={{
								'aria-labelledby': 'long-button',
							}}
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							PaperProps={{
								style: {
									maxHeight: ITEM_HEIGHT * 4.5,
									width: '20ch',
								},
							}}>
							<MenuItem key={orderTypeList[1].id} data-my-value={orderTypeList[1].id} onClick={handleClickOption}>
								<span
									style={{
										display: 'flex',
										width: '100%',
										height: '100%',
										gap: '10px',
									}}>
									{orderTypeList[1].icon}
									<span>{orderTypeList[1].name}</span>
								</span>
							</MenuItem>
							<MenuItem key={orderTypeList[2].id} data-my-value={orderTypeList[2].id} onClick={handleClickOption}>
								<span
									style={{
										display: 'flex',
										width: '100%',
										height: '100%',
										gap: '10px',
									}}>
									{orderTypeList[2].icon}
									<span>{orderTypeList[2].name}</span>
								</span>
							</MenuItem>
						</Menu>
					</>
				) : (
					<></>
				)}
			</div>
		</div>
	);
}
