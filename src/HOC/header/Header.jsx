import React, { useState } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';
import { SearchRounded } from '@mui/icons-material';
import './Header.scss';
import Logo from '../../img/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { searchProduct } from '../../redux/product';
import { useEffect } from 'react';
import _ from 'lodash';
import { logout } from '../../redux/authSlice';
import GoogleLoginBtn from '../../components/GoogleLoginBtn/GoogleLoginBtn';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const CustomBorderTextField = styled(TextField)({
	border: 'none',
	input: {
		color: '#f36522',
	},
	'& label.Mui-focused': {
		color: '#f36522',
	},
	'& .MuiOutlinedInput-root': {
		'&.Mui-focused fieldset': {
			borderColor: '#f36522',
		},
	},
});
const SearchBtn = styled(Button)({
	color: '#f36522',
});
function Header() {
	const dispatch = useDispatch();

	const [open, setOpen] = useState(false);
	const [menuPos, setMenuPos] = useState(null);
	const [searchText, setSearchText] = useState('');
	const toggleMenu = (e) => {
		setOpen(!open);
		setMenuPos(e.currentTarget);
	};
	const handleChangeSearchText = (e) => {
		setSearchText(e.target.value);
	};

	let navigate = useNavigate();

	const submitSearchText = (value) => {
		console.log('value submit: ', value);
		dispatch(searchProduct(value));
		navigate('/search');
	};

	const handleSearchEnter = (e) => {
		if (e.keyCode === 13) {
			const valueSearchText = e.target.value;
			dispatch(searchProduct(valueSearchText));
			navigate('/search');
		}
	};

	const { accessToken, user } = useSelector((state) => state.auth);
	useEffect(() => {}, []);
	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<div className='header__wrapper'>
			<Container
				maxWidth='lg'
				//  style={{ position: "sticky", zIndex: "999", margin: "0 auto", boxShadow: " 0px 0px 20px rgb(0 0 0 / 15%)" }}
			>
				<div className='header'>
					<Link to='/' className='logo-page'>
						<img src={Logo} alt='' className='logo' />
						<p className='nameApp'>F-Food</p>
					</Link>
					<div className='inputBox'>
						{/* <SearchRounded className='searchIcon' /> */}
						{/* <input type='text' placeholder='Bạn đang thèm ăn gì?' /> */}
						<CustomBorderTextField
							fullWidth
							type='search'
							value={searchText}
							placeholder='Bạn đang thèm ăn gì?'
							onChange={handleChangeSearchText}
							InputProps={{
								endAdornment: (
									<SearchBtn onClick={() => submitSearchText(searchText)}>
										<SearchRounded className='searchIcon' />
									</SearchBtn>
								),
							}}
						/>
					</div>
					{_.isEmpty(user) ? (
						<div>
							<GoogleLoginBtn />{' '}
						</div>
					) : (
						<div className='profileContainer' style={{ position: 'relative' }}>
							<div
								id='menu-btn'
								className='imgBox'
								aria-controls={open ? 'user-menu' : undefined}
								aria-haspopup='true'
								aria-expanded={open ? 'true' : undefined}
								onClick={(e) => {
									toggleMenu(e);
								}}>
								<img src={user.imageUrl} alt='' className='profilePic' />
							</div>
							<Menu
								id='user-menu'
								aria-labelledby='menu-btn'
								anchorEl={menuPos}
								open={open}
								onClose={toggleMenu}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'center',
								}}
								transformOrigin={{
									vertical: 'top',
									horizontal: 'center',
								}}
								// sx={{
								// 	top: '50px',
								// 	left: '-10px',
								// }}
							>
								<Typography
									variant='h5'
									sx={{
										width: '100%',
										textAlign: 'center',
										padding: '1rem 0',
										fontWeight: '500',
										fontSize: '16px',
										lineHeight: '1rem',
										boxSizing: 'border-box',
										padding: '1rem',
									}}>
									{user.name}
								</Typography>
								<MenuItem onClick={toggleMenu} sx={{ padding: '1rem' }}>
									<Link to='/profile' className='dropdownItem'>
										<AccountCircleIcon />
										<div className='nameItem'>Tài khoản của tôi</div>
									</Link>
								</MenuItem>
								<MenuItem onClick={toggleMenu} sx={{ padding: '1rem' }}>
									<Link to='/order-history' className='dropdownItem'>
										<InventoryOutlinedIcon />
										<div className='nameItem'>Đơn mua</div>
									</Link>
								</MenuItem>
								<MenuItem onClick={toggleMenu} sx={{ padding: '1rem' }}>
									<div
										className='dropdownItem'
										onClick={() => {
											handleLogout();
										}}>
										<LogoutIcon />
										<div className='nameItem'>Đăng xuất</div>
									</div>
								</MenuItem>
							</Menu>
							{/* <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
							<Typography
								variant='h5'
								sx={{
									width: '100%',
									textAlign: 'center',
									padding: '1rem 0',
									fontWeight: '500',
									fontSize: '16px',
									lineHeight: '1rem',
								}}>
								{user.name}
							</Typography>
							<Link to='/profile' className='dropdownItem'>
								<AccountCircleIcon />
								<div className='nameItem'>Tài khoản của tôi</div>
							</Link>
							<Link to='/order-history' className='dropdownItem'>
								<InventoryOutlinedIcon />
								<div className='nameItem'>Đơn mua</div>
							</Link>
							<div className='dropdownItem' onClick={() => { handleLogout() }}>
								<LogoutIcon />
								<div className='nameItem'>Đăng xuất</div>
							</div>
						</div> */}
						</div>
					)}
				</div>
				<div className='mobile__searchbar'>
					<CustomBorderTextField
						size='small'
						fullWidth
						type='search'
						value={searchText}
						placeholder='Bạn đang thèm ăn gì?'
						onChange={handleChangeSearchText}
						InputProps={{
							endAdornment: (
								<SearchBtn onClick={() => submitSearchText(searchText)}>
									<SearchRounded className='searchIcon' />
								</SearchBtn>
							),
						}}
					/>
				</div>
			</Container>
		</div>
	);
}

export default Header;
