import React, { useEffect } from 'react';
import './Homepage.scss';
import { useDispatch, useSelector } from 'react-redux';
import BtnTime from '../../components/BtnTime/BtnTime';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { updateCurrentTimeSlot, getListTimeSlot } from '../../redux/menuSlice';
import _ from 'lodash'
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

import { getIsValidDate } from "../../util/time.util"
function TimeOrderBar() {
	const dispatch = useDispatch()
	const { getTimeSlotRespone } = useSelector(
		(state) => state.menu,
	);
	const { currentTimeSlot } = useSelector(
		(state) => state.menu,
	);



	useEffect(() => {
		console.log(currentTimeSlot)
	}, [currentTimeSlot]);
	const handleChooseTime = (timeslot) => {
		dispatch(updateCurrentTimeSlot(timeslot))
	}
	useEffect(() => {
		dispatch(getListTimeSlot())
	}, [])
	useEffect(() => {
		let defaultTime = null;
		if (getTimeSlotRespone.length > 0 && _.isEmpty(currentTimeSlot)) {
			defaultTime = getTimeSlotRespone.find((timeslot) => {
				if (getIsValidDate(timeslot?.arriveTime, timeslot?.checkoutTime)) {
					return timeslot;
				}
			})
			if (defaultTime) {
				dispatch(updateCurrentTimeSlot(defaultTime))
			}
		}

	}, [getTimeSlotRespone])
	return (
		<>
			<div className='timeOrderBar'>
				<div className='titleOrder'>
					<p>Chọn khung giờ giao hàng cho  <span style={{ margin: "0 5px" }}> hôm nay</span>     <Tooltip title={<span style={{ fontSize: "16px" }}>Vui lòng đặt trước khung giờ 20 phút.</span>} >
						<IconButton>
							<InfoIcon />
						</IconButton>
					</Tooltip></p>
				</div>
				<Grid2 container spacing={{ xs: 2, md: 4 }}>
					{getTimeSlotRespone && getTimeSlotRespone.length > 0 &&
						getTimeSlotRespone.map((n) => (
							<Grid2
								key={n.id}
								item
								xs={6} md={3}
								sx={
									{
										display: "flex", justifyContent: "center", alignItems: "center"
									}}>
								{getIsValidDate(n?.arriveTime, n?.checkoutTime) ?
									<>
										{
											currentTimeSlot?.id == n?.id ?
												<BtnTime
													time={n}
													state='active'
													handleChooseTime={handleChooseTime} /> :
												<BtnTime
													time={n}
													state='choosable'
													handleChooseTime={handleChooseTime} />
										}
									</> :
									<BtnTime
										time={n}
										state='disabled'
										handleChooseTime={handleChooseTime} />
								}
							</Grid2>
						))}

				</Grid2>

			</div>
		</>
	);
}

export default TimeOrderBar;
