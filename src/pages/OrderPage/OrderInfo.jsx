import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import styles from './OrderPage.module.scss';
export default function OrderLocation() {
	return (
		<Box className={styles.orderSection}>
			<div className={styles.headingFlex}>
				<Typography variant='h6' className={styles.headingTitle}>
					Thông tin người nhận
				</Typography>
				<Typography className={styles.headingChange}>Thay đổi</Typography>
			</div>
			<Paper className={styles.boxContent} elevation={0}>
				<div>
					<Typography className={styles.boxContentTitle}>Số điện thoại</Typography>
					<Typography className={styles.boxContentInfo}>0326 836 877</Typography>
				</div>
				<div>
					<Typography className={styles.boxContentTitle}>Họ tên</Typography>
					<Typography className={styles.boxContentInfo}>John Cena</Typography>
				</div>
			</Paper>
		</Box>
	);
}
