import React from 'react';
import { Container } from '@mui/material';
import { SearchRounded } from '@mui/icons-material';
import './Header.scss';
import Logo from '../../img/logo.png';
import ProfilePic from '../../img/avatar.png';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<Container maxWidth='lg'>
			<div className='header'>
				<Link to='/'>
					<div className='logo-page'>
						<img src={Logo} alt='' className='logo' />
						<p className='nameApp'>F-Food</p>
					</div>
				</Link>
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
		</Container>
	);
}

export default Header;
