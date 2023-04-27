
type State = {
    isCartOpen: boolean,
    checkout: { 
      id: string | number | null,
      webUrl: string,
      lineItems: [],
      totalPrice: string | number | null,
      totalTax: string | number | null,
      subtotalPrice: string | number | null,
     },
    products: [],
    collections: [],
    shop: {
      name: string | number | null,
      description: string | number | null,
    },
    client: {} | null,
    fetchCheckout: any
    fetchProductsAndCollections: any,
    setCartOpen: any,
    setCartClose: any,
    removeLineItemFromCart: any,
    currentPage?: number,
    productsPerPage?: number,
}

type Action = {
    type: string
    payload: any
}

type DispatchType = (args: Action) => Action