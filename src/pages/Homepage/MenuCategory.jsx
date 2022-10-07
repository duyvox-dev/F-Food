import React from 'react';
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
