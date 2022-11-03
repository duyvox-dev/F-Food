import React, { useEffect } from 'react';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './Modal.scss';
import _ from 'lodash';
import { styled } from '@mui/material/styles';

import BasicModal from '../../../components/Modal/BasicModal';
const ModalButton = styled(Button)({
	display: 'block',
	color: 'white',
	backgroundColor: 'rgba(243, 101, 34)',
	'&:hover': { backgroundColor: 'rgba(243, 101, 34)' },
});
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
	useEffect(() => {
		if (_.isEmpty(defaultLocation)) {
			setCurrenLocation(locationList[0]);
		}
	}, []);
	const defaultProps = {
		options: locationList,
		getOptionLabel: (option) => option.roomNumber,
	};
	return (
		<BasicModal modalVisible={modalVisible} closeModal={closeModal}>
			<span className='modal-heading'>Giao đến</span>
			<div className='modal-content'>
				<Autocomplete
					{...defaultProps}
					value={currentLocation}
					disablePortal
					id='combo-box-demo'
					// options={locationList}
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

				<ModalButton
					variant='contained'
					sx={{ width: { xs: '80%', sm: '50%' } }}
					onClick={() => {
						handleSubmitNewLocation();
					}}
					disabled={_.isEmpty(currentLocation)}>
					Cập nhật địa điểm
				</ModalButton>
			</div>
		</BasicModal>
	);
}
