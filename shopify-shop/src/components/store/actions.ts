const fetchCheckout = (checkout) => {
    return {
        type: 'FETCH_CHECKOUT',
        payload: checkout
    }
}

const fetchProductsAndCollections = (shop) => {
    return {
        type: 'FETCH_PRODUCTS_AND_COLLECTIONS',
        payload: shop
    }
}

const setCartOpen = () => {
    return {
        type: 'SET_CART_OPEN'
    }
}

const setCartClose = () => {
    return {
        type: 'SET_CART_CLOSE'
    }
}

const removeLineItemFromCart = (checkout) => {
    return {
        type: 'REMOVE_LINE_ITEM_FROM_CART',
        payload: checkout
    }
}

const setCurrentPage = (currentPage) => {
    return {
        type: 'SET_CURRENT_PAGE',
        payload: currentPage
    }
}












export {
    fetchCheckout,
    fetchProductsAndCollections,
    setCartOpen,
    setCartClose,
    removeLineItemFromCart,
    setCurrentPage
}