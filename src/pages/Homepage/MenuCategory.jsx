import React, { useCallback, useEffect } from 'react';
import './Homepage.scss';
import { DataMenuCategory } from '../../util/data';
import { useDispatch, useSelector } from 'react-redux';

import { getAllProduct } from '../../redux/product'
import { getCategoryList } from '../../redux/categorySlice';

function MenuCategory() {

	const dispatch = useDispatch()
	const { categoryList } = useSelector((state) => state.category)
	const getData = useCallback(() => {
		dispatch(getCategoryList())
	}, [])

	useEffect(() => { getData() }, [])
	useEffect(() => {
		console.log(categoryList)
	}, [categoryList])
	return (
		<>
			<div className='menuCategory'>
				<div className='titleCategory'>
					<p>Danh mục</p>
				</div>
				<div className='contentCategory'>
					{categoryList &&
						categoryList.map((n, index) => (
							<div key={n.id} className='itemsCategory'>
								<img src={DataMenuCategory[index]} alt='' className='image-category' />
								<p className='name-category'>{n.categoryName}</p>
							</div>
						))}
				</div>
			</div>
		</>
	);
}

export default MenuCategory;
