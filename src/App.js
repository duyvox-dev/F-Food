import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { appRoutes } from './routes/appRoutes';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import { updateCurrentTimeSlot, getListTimeSlot, setDayString } from './redux/menuSlice';
import { getIsValidDate, getDayString } from './util/time.util';
import { useSnackbar } from 'notistack';
import { clearMessage } from './redux/messageSlice';
import { dayConstants } from './constansts/constants';
function App() {
	const dispatch = useDispatch();
	const { enqueueSnackbar } = useSnackbar();
	const { message, variant } = useSelector((state) => state.message);
	const { getTimeSlotRespone, currentTimeSlot } = useSelector((state) => state.menu);

	// init time slot
	useEffect(() => {
		dispatch(getListTimeSlot());
	}, []);
	useEffect(() => {
		let defaultTime = null;
		if (getTimeSlotRespone.length > 0 && _.isEmpty(currentTimeSlot)) {
			const newDayString = getDayString(getTimeSlotRespone[getTimeSlotRespone.length - 1].checkoutTime);
			dispatch(setDayString(newDayString));
			if (newDayString == dayConstants.HOM_NAY) {
				defaultTime = getTimeSlotRespone.find((timeslot) => {
					if (getIsValidDate(timeslot?.arriveTime, timeslot?.checkoutTime)) {
						return timeslot;
					}
				});
				if (defaultTime) {
					dispatch(updateCurrentTimeSlot(defaultTime));
				}
			} else {
				dispatch(updateCurrentTimeSlot(getTimeSlotRespone[0]));
			}
		}
	}, [getTimeSlotRespone]);
	// show message
	useEffect(() => {
		if (_.isEmpty(message) == false) {
			enqueueSnackbar(message, { variant: variant, autoHideDuration: 3000 });
			dispatch(clearMessage());
		}
	}, [message]);

	return (
		<div className='App'>
			<Helmet>
				<title>F-Food</title>
			</Helmet>
			<BrowserRouter>
				<Routes>
					{appRoutes.map((route, index) => {
						return <Route key={index} path={route.path} element={route.component} />;
					})}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
