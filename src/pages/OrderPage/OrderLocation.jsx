import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import styles from './OrderPage.module.scss';
export default function OrderLocation() {
	return (
		<Box className={styles.orderSection}>
			<div className={styles.headingFlex}>
				<Typography variant='h6' className={styles.headingTitle}>
					Thông tin giao hàng
				</Typography>
				<Typography className={styles.headingChange}>Đổi địa điểm</Typography>
			</div>
			<Paper className={styles.boxContent} elevation={0}>
				<Typography variant='h6' className='boxContentHeading'>
					Phòng 202
				</Typography>
				<div>
					<Typography className={styles.boxContentTitle}>Thời gian giao hàng dự kiến</Typography>
					<Typography className={styles.boxContentInfo}>9:15 - 9:45 (Giữa slot 1 - slot 2)</Typography>
				</div>
			</Paper>
		</Box>
	);
}
