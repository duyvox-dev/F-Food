import React from 'react';
import { Container } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import './ProductByCategoryPage.scss';
import { vndCurrencyFormat, discountPercent } from '../../util/currency.util';
import IconCacLoaiBanh from '../../img/icon-cac-loai-banh.jpg';
import BanhMiGaXe from '../../img/banhmigaxe.png';
import { ProductByCategory } from '../../util/data';
import { Link } from 'react-router-dom';

// import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const options = [
	'None',
	'Atria',
	'Callisto',
	'Dione',
	'Ganymede',
	'Hangouts Call',
	'Luna',
	'Oberon',
	'Phobos',
	'Pyxis',
	'Sedna',
	'Titania',
	'Triton',
	'Umbriel',
];

const ITEM_HEIGHT = 48;

// export default function LongMenu() {
// 	const [anchorEl, setAnchorEl] = React.useState(null);
// 	const open = Boolean(anchorEl);
// 	const handleClick = (event) => {
// 		setAnchorEl(event.currentTarget);
// 	};
// 	const handleClose = () => {
// 		setAnchorEl(null);
// 	};

// 	return (
// 		<div>
// 			<IconButton
// 				aria-label='more'
// 				id='long-button'
// 				aria-controls={open ? 'long-menu' : undefined}
// 				aria-expanded={open ? 'true' : undefined}
// 				aria-haspopup='true'
// 				onClick={handleClick}>
// 				<MoreVertIcon />
// 			</IconButton>
// 			<Menu
// 				id='long-menu'
// 				MenuListProps={{
// 					'aria-labelledby': 'long-button',
// 				}}
// 				anchorEl={anchorEl}
// 				open={open}
// 				onClose={handleClose}
// 				PaperProps={{
// 					style: {
// 						maxHeight: ITEM_HEIGHT * 4.5,
// 						width: '20ch',
// 					},
// 				}}>
// 				{options.map((option) => (
// 					<MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
// 						{option}
// 					</MenuItem>
// 				))}
// 			</Menu>
// 		</div>
// 	);
// }

const CheckoutButton = styled(Button)({
	display: 'block',
	color: 'white',
	backgroundColor: 'rgba(243, 101, 34)',
	width: '100px',
	marginTop: '1rem',
	boxShadow: 'inherit',
	'&:hover': { backgroundColor: 'rgba(243, 101, 34)' },
});
export default function ProductByCategoryPage() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
		console.log('data: ', event);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const [cake, setCake] = React.useState('');

	const handleChange = (event) => {
		setCake(event.target.value);
	};

	console.log('data: ', cake);
	return (
		<>
			<Container
				maxWidth='lg'
				sx={{
					padding: '1rem 0',
				}}>
				<div>
					<div className='header-category'>
						<img src={IconCacLoaiBanh} alt='' className='icon-category' />
						<div className='title-category'>{cake}</div>
						<div>
							<IconButton
								aria-label='more'
								id='long-button'
								aria-controls={open ? 'long-menu' : undefined}
								aria-expanded={open ? 'true' : undefined}
								aria-haspopup='true'
								onClick={handleClick}>
								<MoreVertIcon />
							</IconButton>
						</div>
					</div>
				</div>
			</Container>
			<FormControl sx={{ m: 1, minWidth: 120 }}>
				<Select value={cake} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
					{options.map((option) => (
						<MenuItem value={option}>{option}</MenuItem>
					))}
				</Select>
				<FormHelperText>Without label</FormHelperText>
			</FormControl>
		</>
		// <>
		// <Container
		// 		maxWidth='lg'
		// 		sx={{
		// 			padding: '1rem 0',
		// 		}}>
		// 		<div className=''>
		// 			<div className='header-category'>
		// 				<img src={IconCacLoaiBanh} alt='' className='icon-category' />
		// 				<div className='title-category'>CÁC LOẠI BÁNH</div>
		// 				<div>
		// 					<IconButton
		// 						aria-label='more'
		// 						id='long-button'
		// 						aria-controls={open ? 'long-menu' : undefined}
		// 						aria-expanded={open ? 'true' : undefined}
		// 						aria-haspopup='true'
		// 						onClick={handleClick}>
		// 						<MoreVertIcon />
		// 					</IconButton>
		// 					<Menu
		// 						id='long-menu'
		// 						MenuListProps={{
		// 							'aria-labelledby': 'long-button',
		// 						}}
		// 						anchorEl={anchorEl}
		// 						open={open}
		// 						onClose={handleClose}
		// 						onChange={handleChange}
		// 						PaperProps={{
		// 							style: {
		// 								maxHeight: ITEM_HEIGHT * 4.5,
		// 								width: '20ch',
		// 							},
		// 						}}>
		// 						{options.map((option) => (
		// 							<MenuItem key={option} value={option} selected={option === 'Pyxis'} onClick={handleClose}>
		// 								{option}
		// 							</MenuItem>
		// 						))}
		// 					</Menu>
		// 				</div>
		// 				<KeyboardArrowDownIcon />
		// 			</div>
		// 			<div className='listProductByCategory'>
		// 				<div className='content-product'>
		// 					{/* <Link to={`/category/${n.id}`} className='category'> */}
		// 					<div className='content-item'>
		// 						<img src={BanhMiGaXe} alt='' className='image-product' />
		// 						<div className='info-product'>
		// 							<div className='name-product'>Combo Bánh Mì Que Gà Xé Phay Phô Mai và 1 Trà Dâu</div>
		// 							<div className='product-price-discount'>
		// 								<div className='product-new-price'>{vndCurrencyFormat(42000)}</div>
		// 								<div className='discount-percent'>-{discountPercent(42000, 49000)}%</div>
		// 							</div>
		// 							<div className='product-bottom'>
		// 								<div className='product-old-price'>{vndCurrencyFormat(49000)}</div>
		// 							</div>
		// 						</div>
		// 					</div>
		// 					{/* </Link> */}
		// 					<CheckoutButton size='large' variant='contained'>
		// 						Thêm
		// 					</CheckoutButton>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</Container>
		// </>
	);
}
