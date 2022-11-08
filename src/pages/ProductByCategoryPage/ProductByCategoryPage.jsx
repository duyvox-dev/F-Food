import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getProductByCategory } from '../../redux/product';
import { Container, Menu, MenuItem, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { vndCurrencyFormat } from '../../util/currency.util';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import CartBtn from '../../components/CartBtn/CartBtn';
import { addToCart } from '../../redux/cartSlice';
import { getCategoryList, setCurrentCategory } from '../../redux/categorySlice';
import _ from 'lodash';
const CheckoutButton = styled(Button)({
	display: 'block',
	color: 'white',
	backgroundColor: 'rgba(243, 101, 34)',
	width: '100px',
	// marginTop: '1rem',
	boxShadow: 'inherit',
	'&:hover': { backgroundColor: 'rgba(243, 101, 34)' },
});

const ITEM_HEIGHT = 48;

function ProductByCategoryPage(props) {
	const { id } = useParams();

	const dispatch = useDispatch();

	const { products } = useSelector((state) => state.product);
	const { categoryList, currentCategory } = useSelector((state) => state.category);

	// const [currCategory, setCurrCategory] = useState();

	// useEffect(() => {
	// 	console.log('categoryList: ', categoryList);
	// }, [categoryList]);
	useEffect(() => {
		window.scrollTo(0, 0);
		if (_.isEmpty(categoryList)) dispatch(getCategoryList());
	}, []);
	useEffect(() => {
		dispatch(setCurrentCategory(id));
		dispatch(getProductByCategory(id));
		//setCurrCategory(categoryList.find((item) => item.id === id))
	}, [id]);

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	// const [categoryName, setCategoryName] = useState();

	// const categoryObj = categoryList.find((item) => item.categoryName === categoryName);
	// const categoryId = categoryObj?.id;

	const handleClickOption = (event) => {
		const { myValue } = event.currentTarget.dataset;
		// console.log(event);
		// setCategoryName(myValue);
		dispatch(setCurrentCategory(myValue));
		setAnchorEl(null);
	};

	useEffect(() => {
		if (_.isEmpty(currentCategory) == false) dispatch(getProductByCategory(currentCategory.id));
	}, [currentCategory]);

	const handleClose = () => {
		setAnchorEl(null);
	};

	// UI temporary, gonne be replace by new UI
	return (
		<Container
			maxWidth='lg'
			sx={{
				padding: '1rem 0',
				position: 'relative',
			}}>
			<div className='searchpage'>
				<div className='header-search-page'>
					<Typography variant='h4' align='center' fontWeight='bold'>
						Tìm kiếm sản phẩm
					</Typography>
				</div>
				<div
					style={{
						textAlign: 'center',
						fontSize: '24px',
						fontWeight: 'bolder',
						color: 'rgba(243, 101, 34)',
					}}>
					<span>{currentCategory?.categoryName}</span>
					<IconButton
						aria-label='more'
						id='long-button'
						aria-controls={open ? 'long-menu' : undefined}
						aria-expanded={open ? 'true' : undefined}
						aria-haspopup='true'
						onClick={handleClick}>
						<MoreVertIcon />
					</IconButton>
					<Menu
						id='long-menu'
						MenuListProps={{
							'aria-labelledby': 'long-button',
						}}
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						PaperProps={{
							style: {
								maxHeight: ITEM_HEIGHT * 4.5,
								width: '20ch',
							},
						}}>
						{categoryList?.map((option) => (
							<MenuItem key={option.id} data-my-value={option.id} onClick={handleClickOption}>
								{option.categoryName}
							</MenuItem>
						))}
					</Menu>
				</div>

				<div className='listProductBySearch'>
					<div className='titleCategoryBySearch'>{/* <p>Đồ uống</p> */}</div>
					{products.length === 0 ? (
						<h2 className='null_alert'>Hiện tại chưa có sản phẩm cho mục tìm kiếm này, vui lòng chọn danh mục khác.</h2>
					) : (
						products.map((product, key) => (
							<div className='content-product' key={key}>
								<Link
									to={`/detail/${product?.productMenuId}`}
									style={{
										textDecoration: 'none',
										color: 'black',
										flex: '1',
									}}>
									<div className='content-item'>
										<div className='image-product'>
											<img src={product.image} alt='' />
										</div>
										<div className='info-product'>
											<div className='name-product'>{product.productName}</div>
											<div className='product-price-discount'>
												<div className='product-new-price'>{vndCurrencyFormat(product.price)}</div>
												{/* <div className='discount-percent'>-{discountPercent(43000, 49000)}%</div> */}
											</div>
											{/* <div className='product-bottom'>
											<div className='product-old-price'>{vndCurrencyFormat(49000)}</div>
										</div> */}
										</div>
									</div>
								</Link>

								<CheckoutButton
									// size={{ xs: 'medium', md: 'large' }}
									variant='contained'
									onClick={() => {
										dispatch(addToCart(product));
									}}>
									Thêm
								</CheckoutButton>
							</div>
						))
					)}
				</div>
			</div>
			<CartBtn></CartBtn>
		</Container>
	);
}

export default ProductByCategoryPage;
