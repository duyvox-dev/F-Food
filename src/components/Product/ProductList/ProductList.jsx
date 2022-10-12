import React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import ProductItem from '../ProductItem/ProductItem';
export default function ProductList({ products }) {
	return (
		<Grid2 container spacing={4}>
			{products.map((product, index) => {
				return (
					<Grid2 item xs={6} md={3} key={index}>
						<ProductItem product={product}></ProductItem>
					</Grid2>
				);
			})}
		</Grid2>
	);
}
