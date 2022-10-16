import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
;

const initialState = {
    cart: [],
    totalAmount: 0,
}


// normal action
export const addToCart = createAction('cartSlice/addToCart', (product, { getState, dispatch }) => {
    let existed = false;
    let curCart = getState().cart;
    const newCart = curCart.forEach((cart) => {
        if (product.id == cart.product.id) {
            existed = true;
            return cart.product.quantity + 1;
        }
    })
    if (!existed) {
        newCart.push({
            product,
            quantity: 1
        })

    }
    dispatch(calculateToTalAmount(newCart))
    return {
        payload: { newCart },
    };
});

// normal action
export const calculateToTalAmount = createAction('cartSlice/addToCart', (cart) => {
    const total = cart.reduce((sum, cartItem) => {
        return sum + cartItem?.quantity
    }, 0)
    return {
        payload: { total },
    };
});
const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: initialState,
    reducers: {
        calculateToTalAmount: (state, { payload }) => {
            state.totalAmount = payload;
        },
        addToCart: (state, { payload }) => {
            state.cart = payload
        }
    },
    extraReducers: (builder) => {
        // get user info
        // builder.addCase(loginWithGoogle.pending, (state) => ({
        //     ...state,
        //     loginLoading: true,
        // }));
        // builder.addCase(loginWithGoogle.fulfilled, (state, { payload }) => ({
        //     ...state,
        //     user: payload,
        //     loginLoading: false,
        // }));
        // builder.addCase(loginWithGoogle.rejected, (state) => ({
        //     ...state,
        //     loginLoading: false,
        // }));


    },
});
const { reducer, actions } = cartSlice;
export const { } = actions;
export default reducer;
export {
}
