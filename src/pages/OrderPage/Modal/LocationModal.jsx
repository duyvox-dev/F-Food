import React from 'react';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './Modal.scss';
import _ from 'lodash';
import BasicModal from '../../../components/Modal/BasicModal';
export default function LocationModal({
	modalVisible = false,
	closeModal = () => {},
	locationList = [],
	defaultLocation = {},
	handleChangeLocation = () => {},
}) {
	const [currentLocation, setCurrenLocation] = useState(defaultLocation);
	const handleSubmitNewLocation = () => {
		if (_.isEmpty(currentLocation) == false) handleChangeLocation(currentLocation);
	};
	return (
		<BasicModal modalVisible={modalVisible} closeModal={closeModal}>
			<span className='modal-heading'>Giao đến</span>
			<div className='modal-content'>
				<Autocomplete
					value={currentLocation}
					disablePortal
					id='combo-box-demo'
					options={locationList}
					sx={{ width: '100%' }}
					renderInput={(params) => (
						<TextField
							{...params}
							label='Địa điểm'
							variant='standard'
							error={_.isEmpty(currentLocation)}
							helperText={_.isEmpty(currentLocation) ? 'Địa điểm giao hàng không được bỏ trống' : ''}
						/>
					)}
					onChange={(event, newLocation) => {
						setCurrenLocation(newLocation);
					}}
				/>

				<Button
					variant='contained'
					sx={{ width: { xs: '80%', sm: '50%' }, boxShadow: 'inherit' }}
					onClick={() => {
						handleSubmitNewLocation();
					}}
					disabled={_.isEmpty(currentLocation)}>
					Cập nhật địa điểm
				</Button>
			</div>
		</BasicModal>
	);
}
