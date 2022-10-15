import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import { SearchRounded } from '@mui/icons-material';
import './Header.scss';
import Logo from '../../img/logo.png';
import ProfilePic from '../../img/avatar.png';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';

function Header() {
	const [open, setOpen] = useState(false);
	return (
		<Container maxWidth='lg'>
			<div className='header'>
				<Link to='/' className='logo-page'>
					<img src={Logo} alt='' className='logo' />
					<p className='nameApp'>F-Food</p>
				</Link>
				<div className='inputBox'>
					<SearchRounded className='searchIcon' />
					<input type='text' placeholder='Bạn đang thèm ăn gì?' />
				</div>
				<div className='profileContainer'>
					<div
						className='imgBox'
						onClick={() => {
							setOpen(!open);
						}}>
						<img src={ProfilePic} alt='' className='profilePic' />
					</div>
					<div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
						<Typography
							variant='h5'
							sx={{
								width: '100%',
								textAlign: 'center',
								padding: '1rem 0',
								fontWeight: '500',
								fontSize: '18px',
								lineHeight: '1rem',
							}}>
							Ha Anh
						</Typography>
						<Link to='/profile' className='dropdownItem'>
							<AccountCircleIcon />
							<div className='nameItem'>Tài khoản của tôi</div>
						</Link>
						<Link to='/order-history' className='dropdownItem'>
							<InventoryOutlinedIcon />
							<div className='nameItem'>Đơn mua</div>
						</Link>
						<div className='dropdownItem'>
							<LogoutIcon />
							<div className='nameItem'>Đăng xuất</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
}

export default Header;
