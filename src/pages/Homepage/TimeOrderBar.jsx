import React from 'react';
import './Homepage.scss';
import { TimeOrder } from '../../util/data';
import { useSelector } from 'react-redux';
import BtnTime from '../../components/BtnTime/BtnTime';

function TimeOrderBar() {

	const { getTimeSlotRespone } = useSelector(
		(state) => state.menu,
	);

	console.log('hi', getTimeSlotRespone.results);
	return (
		<>
			<div className='timeOrderBar'>
				<div className='titleOrder'>
					<p>Chọn khung giờ đặt hàng cho hôm nay</p>
				</div>
				<div className='timeOrder'>
					{/* <button type='button' className='btChooseTime disable'>
						7:00 - 9:15
					</button>
					<button type='button' className='btChooseTime active'>
						9:45 - 12:00
					</button>
					{TimeOrder &&
						TimeOrder.map((n) => (
							<button type='button' className='btChooseTime'>
								{n.time}
							</button>
						))} */}

					{getTimeSlotRespone.results && getTimeSlotRespone.results.length > 0 &&
						getTimeSlotRespone.results.map((n) => (
							<BtnTime arriveTime={n.arriveTime} checkoutTime={n.checkoutTime} />
						))}

				</div>
			</div>
		</>
	);
}

export default TimeOrderBar;
