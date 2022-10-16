import React from 'react';
import IconButton from '@mui/material/IconButton';

import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useSelector } from 'react-redux';
const AddToCartButton = styled(IconButton)({
    // display: 'flex',
    color: 'white',
    backgroundColor: 'rgba(243, 101, 34)',
    width: '50px',
    height: '50px',
    padding: 0,
    fontSize: '17px',
    position: "relative",
    zIndex: "99",
    '&:hover': { backgroundColor: 'rgba(243, 101, 34)' },
});
export default function CartBtn() {
    const { totalAmount } = useSelector((state) => state.cart)
    return (
        <Link to="/order" style={{ position: "fixed", bottom: "1rem", right: "2rem" }}>
            <AddToCartButton>
                <LocalMallIcon></LocalMallIcon>
                <span
                    style={{
                        position: "absolute",
                        top: "-5px",
                        right: "0px",
                        display: "flex",
                        justifyContent: "center",
                        alignItem: "center",
                        background: "white",
                        width: "20px",
                        height: "20px",
                        color: "rgba(243, 101, 34)",
                        border: "1px solid rgba(243, 101, 34)",
                        borderRadius: "999px"
                    }}
                >{totalAmount}</span>
            </AddToCartButton>
        </Link>
    );
}
