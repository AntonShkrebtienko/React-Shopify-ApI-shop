"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initialState = {
    isCartOpen: false,
    checkout: {
        id: null,
        webUrl: '',
        lineItems: [],
        totalPrice: null,
        totalTax: null,
        subtotalPrice: null
    },
    products: [],
    collections: [],
    shop: {
        name: null,
        description: null
    },
    client: null,
    fetchCheckout: null,
    fetchProductsAndCollections: null,
    setCartOpen: null,
    setCartClose: null,
    removeLineItemFromCart: null,
    currentPage: 1,
    productsPerPage: 2
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CHECKOUT':
            return Object.assign(Object.assign({}, state), { checkout: action.payload });
        case 'FETCH_PRODUCTS_AND_COLLECTIONS':
            return Object.assign(Object.assign({}, state), { collections: action.payload.collections, products: action.payload.products, shop: action.payload });
        case 'SET_CART_OPEN':
            return Object.assign(Object.assign({}, state), { isCartOpen: true });
        case 'SET_CART_CLOSE':
            return Object.assign(Object.assign({}, state), { isCartOpen: false });
        case 'REMOVE_LINE_ITEM_FROM_CART':
            return Object.assign(Object.assign({}, state), { checkout: action.payload });
        case 'SET_CURRENT_PAGE':
            return Object.assign(Object.assign({}, state), { currentPage: action.payload });
    }
    return state;
};
exports.default = reducer;
