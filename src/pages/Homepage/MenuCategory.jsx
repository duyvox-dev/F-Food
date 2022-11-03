import React, { useCallback, useEffect } from 'react';
import './Homepage.scss';
import { DataMenuCategory } from '../../util/data';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategoryList } from '../../redux/categorySlice';

function MenuCategory() {
	const dispatch = useDispatch();
	const { categoryList } = useSelector((state) => state.category);
	const getData = useCallback(() => {
		dispatch(getCategoryList());
	}, []);

	useEffect(() => {
		getData();
	}, []);
	return (
		<>
			<div className='menuCategory'>
				<div className='titleCategory'>
					<p>Danh mục</p>
				</div>
				<div className='contentCategory'>
					{categoryList &&
						categoryList.map((n, index) => (
							<Link to={`/category/${n?.id}`} className='category' key={n.id}>
								<div className='itemsCategory'>
									<img src={DataMenuCategory[index]} alt='' className='image-category' />
									<p className='name-category'>{n.categoryName}</p>
								</div>
							</Link>
						))}
				</div>
			</div>
		</>
	);
}

export default MenuCategory;
