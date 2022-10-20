import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { appRoutes } from './routes/appRoutes';
import { useEffect } from "react"
import { useSelector, dispatch, useDispatch } from 'react-redux';
import _ from "lodash"
import { updateCurrentTimeSlot, getListTimeSlot } from "./redux/menuSlice"
import { getIsValidDate } from './util/time.util';
function App() {
	const dispatch = useDispatch()
	const { getTimeSlotRespone, currentTimeSlot } = useSelector((state) => state.menu)
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
			{/* <h1>HomePage</h1> */}
		</div>
	);
}

export default App;
