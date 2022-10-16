import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
;

const initialState = {
    carts: [],
    totalAmount: 0,
}


// normal action
// export const addToCart = createAsyncThunk('cartSlice/addToCart', (product, thunkAPI) => {
//     console.log(product)

//     let existed = false;
//     const curCart = state.cart
//     console.log(state)
//     const newCart = curCart.forEach((cart) => {
//         if (product.id == cart.product.id) {
//             existed = true;
//             return cart.product.quantity + 1;
//         }
//     })
//     if (!existed) {
//         newCart.push({
//             product,
//             quantity: 1
//         })
//     }
//     thunkAPI.dispatch(calculateToTalAmount(newCart))
//     return {
//         payload: { newCart },
//     };
// });

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: initialState,
    reducers: {
        setTotalQuantity: (state, { payload }) => {
            state.totalAmount = payload;
        },
        changeQuantityCart: (state, { payload }) => {
            let indexToDelete = -1;
            let newCart = [];
            newCart = state?.carts.map((cart, index) => {
                if (payload.id == cart.product.id) {
                    if (payload.quantity <= 0)
                        indexToDelete = index;
                    return {
                        ...cart,
                        quantity: payload.quantity
                    };
                }
                return cart
            })
            if (indexToDelete != -1) {
                newCart.splice(indexToDelete, 1)
            }
            state.carts = newCart
        },
        addToCart: (state, { payload }) => {

            let existed = false;
            let newCart = [];
            newCart = state?.carts.map((cart) => {
                if (payload.id == cart.product.id) {
                    existed = true;
                    const newQuantity = cart.quantity + 1;
                    return {
                        ...cart,
                        quantity: newQuantity
                    };
                }
                return cart
            })
            if (!existed) {
                newCart.push({
                    product: payload,
                    quantity: 1
                })
            }
            state.carts = newCart
        },
        decQuantityCart: (state, { payload }) => {

            let indexToDelete = -1;
            let newCart = [];

            newCart = state?.carts.map((cart, index) => {
                if (payload.id == cart.product.id) {
                    const newQuantity = cart.quantity - 1;
                    if (newQuantity <= 0)
                        indexToDelete = index;
                    return {
                        ...cart,
                        quantity: newQuantity
                    };
                }
                return cart
            })
            if (indexToDelete != -1) {
                newCart.splice(indexToDelete, 1)
            }
            state.carts = newCart
        }

    },

});
export const { addToCart, setTotalQuantity, decQuantityCart, changeQuantityCart } = cartSlice.actions
export default cartSlice.reducer
