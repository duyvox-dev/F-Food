import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { appRoutes } from './routes/appRoutes';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import { updateCurrentTimeSlot, getListTimeSlot, setDayString } from './redux/settingSlice';
import { getIsValidDate, getDayString } from './util/time.util';
import { useSnackbar } from 'notistack';
import { clearMessage } from './redux/messageSlice';
import { dayConstants } from './constansts/constants';
import Loading from './components/Loading/Loading';

function App() {
	const dispatch = useDispatch();
	const { enqueueSnackbar } = useSnackbar();
	const { message, variant } = useSelector((state) => state.message);
	const { timeSlotList, currentTimeSlot } = useSelector((state) => state.setting);

	// init time slot
	useEffect(() => {
		dispatch(getListTimeSlot());
	}, []);
	useEffect(() => {
		let defaultTime = null;
		if (timeSlotList.length > 0 && _.isEmpty(currentTimeSlot)) {
			const newDayString = getDayString(timeSlotList[timeSlotList.length - 1].arriveTime);
			dispatch(setDayString(newDayString));
			if (newDayString == dayConstants.HOM_NAY) {
				defaultTime = timeSlotList.find((timeslot) => {
					if (getIsValidDate(timeslot?.arriveTime, timeslot?.checkoutTime)) {
						return timeslot;
					}
				});
				if (defaultTime) {
					dispatch(updateCurrentTimeSlot(defaultTime));
				}
			} else {
				dispatch(updateCurrentTimeSlot(timeSlotList[0]));
			}
		}
	}, [timeSlotList]);
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
			<Loading />
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
