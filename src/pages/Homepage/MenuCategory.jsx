import React, { useCallback, useEffect } from 'react';
import './Homepage.scss';
import { DataMenuCategory } from '../../util/data';
import { useDispatch } from 'react-redux';

import { getAllProduct } from '../../redux/product'

function MenuCategory() {

	const dispatch = useDispatch()

	const getData = useCallback(() => {
		dispatch(getAllProduct())
	}, [])

	useEffect(() => { getData() }, [])

	return (
		<>
			<div className='menuCategory'>
				<div className='titleCategory'>
					<p>Danh mục</p>
				</div>
				<div className='contentCategory'>
					{DataMenuCategory &&
						DataMenuCategory.map((n) => (
							<div key={n.id} className='itemsCategory'>
								<img src={n.image} alt='' className='image-category' />
								<p className='name-category'>{n.name}</p>
							</div>
						))}
				</div>
			</div>
		</>
	);
}

export default MenuCategory;
