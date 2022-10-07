import React from 'react';
import './Homepage.scss';
import { TimeOrder } from '../../util/data';

function TimeOrderBar() {
	return (
		<>
			<div className='timeOrderBar'>
				<div className='titleOrder'>
					<p>Chọn khung giờ đặt hàng cho hôm nay</p>
				</div>
				<div className='timeOrder'>
					<button type='button' className='btChooseTime disable'>
						9:45 - 12:00
					</button>
					<button type='button' className='btChooseTime active'>
						9:45 - 12:00
					</button>
					{TimeOrder &&
						TimeOrder.map((n) => (
							<button type='button' className='btChooseTime'>
								{n.time}
							</button>
						))}
				</div>
			</div>
		</>
	);
}

export default TimeOrderBar;
