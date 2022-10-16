const CART = "Cart";

export const localStorageService = {
    setCartLocal: (data) => {
        let dataJson = JSON.stringify(data);
        localStorage.setItem(CART, dataJson);
    },
    getCartLocal: () => {
        let dataJson = localStorage.getItem(CART);
        if (dataJson) {
            return JSON.parse(dataJson);
        }
        return null;
    },
    removeCartLocal: () => {
        let dataJson = localStorage.getItem(CART);
        if (dataJson) {
            localStorage.removeItem(CART);
        }
    },
};
