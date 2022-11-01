import React, { useEffect, useState } from 'react';
import { TimeOrder } from '../../util/data';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import moment from 'moment';
import Tooltip from '@mui/material/Tooltip';

const StyledButton = styled(Button)({
	background: '#fcf6f6',
	border: '2px solid rgba(243, 101, 34)',
	color: 'rgba(243, 101, 34)',
	// backgroundColor: 'rgba(243, 101, 34)',
	padding: '0.5rem 3rem',
	'&:hover': { backgroundColor: 'rgba(243, 101, 34)', color: 'white' },
	'&:disabled': {
		// backgroundColor: "gray",
		background: '#fcf6f6',
		border: '2px solid rgba(243, 101, 34)',
		color: 'rgba(243, 101, 34)',
		opacity: 0.3,
	},
	'&:active': {
		backgroundColor: 'rgba(243, 101, 34)',
	},
});
function BtnTime({ time = {}, state, handleChooseTime = () => {} }) {
	return (
		<>
			{state == 'disabled' ? (
				<>
					<Tooltip title={<span style={{ fontSize: '16px' }}>Khung giờ đã qua</span>} placement='bottom' arrow>
						<span>
							<StyledButton
								sx={{
									padding: {
										xs: '0.5rem 1rem',
										md: '0.5rem 3rem',
									},
								}}
								onClick={() => {
									handleChooseTime(time);
								}}
								disabled>
								{moment(`2015-06-17 ${time.arriveTime}`).format('HH:mm')}-
								{moment(`2015-06-17 ${time.checkoutTime}`).format('HH:mm')}
							</StyledButton>
						</span>
					</Tooltip>
				</>
			) : (
				<>
					{state == 'choosable' ? (
						<StyledButton
							sx={{
								padding: {
									xs: '0.5rem 1rem',
									md: '0.5rem 3rem',
								},
							}}
							onClick={() => {
								handleChooseTime(time);
							}}>
							{moment(`2015-06-17 ${time.arriveTime}`).format('HH:mm')}-
							{moment(`2015-06-17 ${time.checkoutTime}`).format('HH:mm')}
						</StyledButton>
					) : (
						<StyledButton
							sx={{
								background: 'rgba(243, 101, 34)',
								color: 'white',

								padding: {
									xs: '0.5rem 1rem',
									md: '0.5rem 3rem',
								},
							}}
							onClick={() => {
								handleChooseTime(time);
							}}>
							{moment(`2015-06-17 ${time.arriveTime}`).format('HH:mm')}-
							{moment(`2015-06-17 ${time.checkoutTime}`).format('HH:mm')}
						</StyledButton>
					)}
				</>
			)}
		</>
	);
}

export default BtnTime;
