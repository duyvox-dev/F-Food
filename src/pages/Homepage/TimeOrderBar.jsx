import React, { useEffect } from 'react';
import './Homepage.scss';
import { TimeOrder } from '../../util/data';
import { useDispatch, useSelector } from 'react-redux';
import BtnTime from '../../components/BtnTime/BtnTime';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import moment from 'moment';
import { getNearestTimeSlot, updateCurrentTimeSlot, getListTimeSlot } from '../../redux/menuSlice';
import _ from 'lodash'
function TimeOrderBar() {
	const dispatch = useDispatch()
	const { getTimeSlotRespone } = useSelector(
		(state) => state.menu,
	);
	const { currentTimeSlot } = useSelector(
		(state) => state.menu,
	);
	const currentTimeMinus20 = new Date(Date.now() - 220000 * 60)
	const getIsValidDate = (arriveTime, checkoutTime) => {
		const currentDate = `${currentTimeMinus20.getHours()}:${currentTimeMinus20.getMinutes()}:${currentTimeMinus20.getSeconds()}`
		return currentDate < arriveTime && currentDate < checkoutTime;
	}

	useEffect(() => {
		console.log(currentTimeSlot)
	}, [currentTimeSlot]);
	const handleChooseTime = (timeslot) => {
		dispatch(updateCurrentTimeSlot(timeslot))
	}
	useEffect(() => {
		dispatch(getListTimeSlot())
	}, [])
	return (
		<>
			<div className='timeOrderBar'>
				<div className='titleOrder'>
					<p>Chọn khung giờ đặt hàng cho <span> hôm nay</span></p>
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
