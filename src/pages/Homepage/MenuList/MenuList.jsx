import React, { useCallback, useEffect } from 'react';
// import '../Homepage.scss';
import '../MenuList/MenuList.scss';
import { DataMenuCategory } from '../../../util/data';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { getMenuList } from '../../../redux/menuSlice';

function MenuList() {
	const dispatch = useDispatch();
	const { menuList } = useSelector((state) => state.menu);
	const { currentTimeSlot } = useSelector((state) => state.setting);

	useEffect(() => {
		// console.log(currentTimeSlot);
		if (_.isEmpty(currentTimeSlot) == false) {
			dispatch(getMenuList());
		}
	}, [currentTimeSlot]);
	return (
		<>
			{/* <div className='menuCategory'>
				<div className='titleCategory'>
					<p>Menu khung giờ</p>
				</div>
				<div className='contentCategory'>
					{menuList &&
						menuList.map((n, index) => (
							<Link to={`/menu/${n?.id}`} className='category' key={n.id}>
								<div className='itemsCategory'>
									<img src={n?.image ? n.image : DataMenuCategory[4]} alt='' className='image-category' />
									<p className='name-category'>{n.menuName}</p>
								</div>
							</Link>
						))}
				</div>
			</div> */}
			<div className='menuTime'>
				<div className='titleMenuList'>
					<p>Menu khung giờ</p>
				</div>
				<div className='contentItems'>
					{menuList &&
						menuList.map((n, index) => (
							<Link to={`/menu/${n?.id}`} className='items' key={n.id}>
								<div className='itemsMenu'>
									<img src={n?.image ? n.image : DataMenuCategory[4]} alt='' className='image-items' />
									<p className='name-items'>{n.menuName}</p>
								</div>
							</Link>
						))}
				</div>
			</div>
		</>
	);
}

export default MenuList;
