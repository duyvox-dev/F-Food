import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.scss';
import { DataMenuCategory } from '../../util/data';

function MenuCategory() {
	return (
		<>
			<div className='menuCategory'>
				<div className='titleCategory'>
					<p>Danh mục</p>
				</div>
				<div className='contentCategory'>
					{DataMenuCategory &&
						DataMenuCategory.map((n) => (
							<Link to={`/category/${n.id}`} className='category'>
								<div key={n.id} className='itemsCategory'>
									<img src={n.image} alt='' className='image-category' />
									<p className='name-category'>{n.name}</p>
								</div>
							</Link>
						))}
				</div>
			</div>
		</>
	);
}

export default MenuCategory;
