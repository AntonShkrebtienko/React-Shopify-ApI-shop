import { stat } from 'fs'
import * as actions from './actions'

const initialState: State = {
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
}

const reducer = (
    state: State = initialState,
    action: Action
  ): State => {
    switch (action.type) {
      case 'FETCH_CHECKOUT':
        return {
          ...state,
          checkout: action.payload
        }
      case 'FETCH_PRODUCTS_AND_COLLECTIONS':
        return {
          ...state,
          collections: action.payload.collections,
          products: action.payload.products,
          shop: action.payload
        }
      case 'SET_CART_OPEN':
        return {
          ...state,
          isCartOpen: true
        }
      case 'SET_CART_CLOSE':
        return {
          ...state,
          isCartOpen: false
        }
      case 'REMOVE_LINE_ITEM_FROM_CART':
        return {
          ...state,
          checkout:action.payload
        }
      case 'SET_CURRENT_PAGE':
        return {
          ...state, 
          currentPage: action.payload
        }
    }
    return state
  }
  
  export default reducer