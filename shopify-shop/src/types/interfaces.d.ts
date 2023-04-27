interface HeaderProps {
    checkout?: {
        id: any,
        webUrl: any,
        lineItems: [],
        totalPrice: any,
        totalTax: any,
        subtotalPrice: any
    },
}

interface ILineItemProps {
    updateQuantityInCart: (...args:any) => any,
    removeLineItemInCart: (...args:any) => any,
    line_item: any
}

interface IProductProps {
    product: any
    addVariantToCart: (...args:any) => any,
    checkout?: {
      id: any,
      webUrl: any,
      lineItems: [],
      totalPrice: any,
      totalTax: any,
      subtotalPrice: any
  },
}

interface IProductsState {
    selectedOptions: any,
    selectedVariant: any,
    selectedVariantImage: any,
    selectedVariantQuantity: any,
    isHovered: boolean
}