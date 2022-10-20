import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductByCategory } from '../../redux/product';
import { Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { vndCurrencyFormat } from '../../util/currency.util';
import CartBtn from "../../components/CartBtn/CartBtn"

const CheckoutButton = styled(Button)({
    display: 'block',
    color: 'white',
    backgroundColor: 'rgba(243, 101, 34)',
    width: '100px',
    marginTop: '1rem',
    boxShadow: 'inherit',
    '&:hover': { backgroundColor: 'rgba(243, 101, 34)' },
});

function ProductByCategoryPage(props) {
    const { id } = useParams();

    const dispatch = useDispatch()

    const { products } = useSelector((state) => state.product)

    useEffect(() => {
        dispatch(getProductByCategory(id))
    }, [id])


    // UI temporary, gonne be replace by new UI
    return (
        <Container
            maxWidth='lg'
            sx={{
                padding: '1rem 0',
                position: "relative"
            }}>
            <div className='searchpage'>
                <div className='header-search-page'>
                    <Typography variant='h4' align='center' fontWeight='bold'>
                        Tìm kiếm sản phẩm
                    </Typography>
                </div>
                <div className='listProductBySearch'>
                    <div className='titleCategoryBySearch'>
                        {/* <p>Đồ uống</p> */}
                    </div>
                    {products.length === 0 ? (<div><h1>CHƯA CÓ DỮ LIỆU</h1></div>) : products.map((product, key) => (
                        <div className='content-product'>
                            <div className='content-item'>
                                <img src={product.image} alt='' className='image-product' />
                                <div className='info-product'>
                                    <div className='name-product'>{product.name}</div>
                                    <div className='product-price-discount'>
                                        <div className='product-new-price'>{vndCurrencyFormat(product.price)}</div>
                                        {/* <div className='discount-percent'>-{discountPercent(43000, 49000)}%</div> */}
                                    </div>
                                    {/* <div className='product-bottom'>
											<div className='product-old-price'>{vndCurrencyFormat(49000)}</div>
										</div> */}
                                </div>
                            </div>
                            <CheckoutButton size='large' variant='contained'>
                                Thêm
                            </CheckoutButton>
                        </div>
                    ))}
                </div>
            </div>
            <CartBtn></CartBtn>
        </Container>

    );
}

export default ProductByCategoryPage;