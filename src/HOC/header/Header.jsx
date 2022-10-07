import React from 'react';
import {} from '@mui/material';
import { SearchRounded } from '@mui/icons-material';
import './Header.scss';
import Logo from '../../img/logo.png';
import ProfilePic from '../../img/avatar.png';

function Header() {
	return (
		<header className='container'>
			{/* desktop & tablet */}
			<div className='header'>
				<div className='logo-page'>
					<img src={Logo} alt='' className='logo' />
					<p className='nameApp'>F-Food</p>
				</div>
				<div className='inputBox'>
					<SearchRounded className='searchIcon' />
					<input type='text' placeholder='Bạn đang thèm ăn gì?' />
				</div>
				<div className='profileContainer'>
					<div className='imgBox'>
						<img src={ProfilePic} alt='' className='profilePic' />
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
