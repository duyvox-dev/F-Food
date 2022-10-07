import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import './Modal.scss';
export default function BasicModal({ children, modalVisible = false, closeModal = () => {} }) {
	return (
		<div>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				open={modalVisible}
				onClose={closeModal}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={modalVisible}>
					<div className='modal-container'>{children}</div>
				</Fade>
			</Modal>
		</div>
	);
}
