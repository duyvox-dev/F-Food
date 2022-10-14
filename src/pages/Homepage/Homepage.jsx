import React from 'react';
import './Homepage.scss';
import ProductCategory from './ProductCategory';
import ProductList from '../../components/Product/ProductList/ProductList';
import MenuCategory from './MenuCategory';
import HomeContainer from './HomeContainer';
import TimeOrderBar from './TimeOrderBar';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import { ProductByCategory } from '../../util/data';
import GoogleLoginBtn from '../../components/GoogleLoginBtn/GoogleLoginBtn';
export default function HomePage() {
	return (
		<>
			<Container maxWidth='lg'>
				<GoogleLoginBtn></GoogleLoginBtn>
			</Container>
		</>
	);
}
