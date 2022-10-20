import { localStorageService } from '../util/localStorage.util';
import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
;



const getInitState = () => {
    const data = localStorageService.getCartLocal();
    if (data)
        return data;
    return {
        carts: [],
        totalAmount: 0,
    }
};
const initialState = getInitState();
// normal action
export const removeCart = createAction('cartSlice/removeCart', () => {
    localStorageService.removeCartLocal();
    return {
        payload: {},
    };
});
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
            localStorageService.setCartLocal(state)
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
            localStorageService.setCartLocal(state)
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
            localStorageService.setCartLocal(state)
        },
        removeCart: (state, { payload }) => {
            state.carts = [];
            state.totalAmount = 0;
        }

    },

});
export const { addToCart, setTotalQuantity, decQuantityCart, changeQuantityCart } = cartSlice.actions
export default cartSlice.reducer
