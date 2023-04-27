"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCurrentPage = exports.removeLineItemFromCart = exports.setCartClose = exports.setCartOpen = exports.fetchProductsAndCollections = exports.fetchCheckout = void 0;
const fetchCheckout = (checkout) => {
    return {
        type: 'FETCH_CHECKOUT',
        payload: checkout
    };
};
exports.fetchCheckout = fetchCheckout;
const fetchProductsAndCollections = (shop) => {
    return {
        type: 'FETCH_PRODUCTS_AND_COLLECTIONS',
        payload: shop
    };
};
exports.fetchProductsAndCollections = fetchProductsAndCollections;
const setCartOpen = () => {
    return {
        type: 'SET_CART_OPEN'
    };
};
exports.setCartOpen = setCartOpen;
const setCartClose = () => {
    return {
        type: 'SET_CART_CLOSE'
    };
};
exports.setCartClose = setCartClose;
const removeLineItemFromCart = (checkout) => {
    return {
        type: 'REMOVE_LINE_ITEM_FROM_CART',
        payload: checkout
    };
};
exports.removeLineItemFromCart = removeLineItemFromCart;
const setCurrentPage = (currentPage) => {
    return {
        type: 'SET_CURRENT_PAGE',
        payload: currentPage
    };
};
exports.setCurrentPage = setCurrentPage;
