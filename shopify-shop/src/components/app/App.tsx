import * as React from 'react';
import Products from '../pages/Products';
import Cart from '../cart/Cart';
import gql from 'babel-plugin-graphql-js-client-transform';
import Client from 'graphql-js-client';
import typeBundle from '../../types';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { 
  fetchCheckout, 
  fetchProductsAndCollections, 
  setCartOpen, 
  removeLineItemFromCart,
  setCartClose
} from '../store/actions';
import {
  Router,
  Link,
} from "@reach/router";

import { connect } from 'react-redux';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';


class App extends React.Component<State> {
  constructor(props: State) {
    super(props); 
      this.handleCartClose = this.handleCartClose.bind(this);
      this.addVariantToCart = this.addVariantToCart.bind(this);
      this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
      this.removeLineItemInCart = this.removeLineItemInCart.bind(this); 
  }

  componentWillMount() {

    const client = new Client(typeBundle, {
      url: 'https://react-shopif-learning.myshopify.com/api/graphql',
      fetcherOptions: {
        headers: {
          'X-Shopify-Storefront-Access-Token': '227821f603702e6f56e9a05d3135db76'
        }
      }
    });
    

      client.send(gql(this.props.client)`
      mutation {
        checkoutCreate(input: {}) {
          userErrors {
            message
            field
          }
          checkout {
            id
            webUrl
            subtotalPrice
            totalTax
            totalPrice
            lineItems (first:250) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  title
                  variant {
                    title
                    image {
                      src
                    }
                    price
                  }
                  quantity
                }
              }
            }
          }
        }
      }
    `).then((res: { model: { checkoutCreate: { checkout: {}; }; }; }) => {
      this.props.fetchCheckout(res.model.checkoutCreate.checkout)
    });




    client.send(gql(this.props.client)`
      query {
        shop {
          name
          description
          collections(first:3){
            pageInfo{
              hasNextPage
              hasPreviousPage
            }
            edges{
              node{
                id
                title
                
              }
            }
            
          }
          products(first:20) {
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            edges {
              node {
                id
                title
                options {
                  name
                  values
                }
                variants(first: 250) {
                  pageInfo {
                    hasNextPage
                    hasPreviousPage
                  }
                  edges {
                    node {
                      title
                      selectedOptions {
                        name
                        value
                      }
                      image {
                        src
                      }
                      price
                    }
                  }
                }
                images(first: 250) {
                  pageInfo {
                    hasNextPage
                    hasPreviousPage
                  }
                  edges {
                    node {
                      src
                    }
                  }
                }
                collections(first: 3) {
                  pageInfo {
                    hasNextPage
                    hasPreviousPage
                  }
                  edges{
                    node{
                      id
                      title
                    }
                  }
                }
              }
            }
          }
        }
      }
    `).then((res: { model: { shop: { products: []; collections: []; }; }; }) => {
      this.props.fetchProductsAndCollections(res.model.shop)
    });
  }

  addVariantToCart(variantId: any, quantity: string) {
    const client: any = new Client(typeBundle, {
      url: 'https://react-shopif-learning.myshopify.com/api/graphql',
      fetcherOptions: {
        headers: {
          'X-Shopify-Storefront-Access-Token': '227821f603702e6f56e9a05d3135db76'
        }
      }
    });
    this.props.setCartOpen()

    const lineItems = [{ variantId, quantity: parseInt(quantity, 10) }]
    const checkoutId = this.props.checkout.id
      client.send(gql(this.props.client)`
        mutation ($checkoutId: ID!, $lineItems: [CheckoutLineItemInput!]!) {
          checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {
            userErrors {
              message
              field
            }
            checkout {
              webUrl
              subtotalPrice
              totalTax
              totalPrice
              lineItems (first:250) {
                pageInfo {
                  hasNextPage
                  hasPreviousPage
                }
                edges {
                  node {
                    title
                    variant {
                      title
                      image {
                        src
                      }
                      price
                    }
                    quantity
                  }
                }
              }
            }
          }
        }
      `, { checkoutId, lineItems }).then((res: { model: { checkoutLineItemsAdd: { checkout: {}; }; }; }) => {
        this.props.fetchCheckout(res.model.checkoutLineItemsAdd.checkout)
      });
    }
  
  updateQuantityInCart(lineItemId: any, quantity: string) {
    const client: any = new Client(typeBundle, {
      url: 'https://react-shopif-learning.myshopify.com/api/graphql',
      fetcherOptions: {
        headers: {
          'X-Shopify-Storefront-Access-Token': '227821f603702e6f56e9a05d3135db76'
        }
      }
    });
    const checkoutId = this.props.checkout.id
    const lineItems = [{ id: lineItemId, quantity: parseInt(quantity, 10) }]

    return client.send(gql(this.props.client)`
      mutation ($checkoutId: ID!, $lineItems: [CheckoutLineItemUpdateInput!]!) {
        checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {
          userErrors {
            message
            field
          }
          checkout {
            webUrl
            subtotalPrice
            totalTax
            totalPrice
            lineItems (first:250) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  title
                  variant {
                    title
                    image {
                      src
                    }
                    price
                  }
                  quantity
                }
              }
            }
          }
        }
      }
    `, { checkoutId, lineItems }).then((res: { model: { checkoutLineItemsUpdate: { checkout: {}; }; }; }) => {
      this.props.fetchCheckout(res.model.checkoutLineItemsUpdate.checkout)
    });
  }

  removeLineItemInCart(lineItemId: any) {
    const client: any = new Client(typeBundle, {
      url: 'https://react-shopif-learning.myshopify.com/api/graphql',
      fetcherOptions: {
        headers: {
          'X-Shopify-Storefront-Access-Token': '227821f603702e6f56e9a05d3135db76'
        }
      }
    });
    const checkoutId = this.props.checkout.id;

    return client.send(gql(this.props.client)`
      mutation ($checkoutId: ID!, $lineItemIds: [ID!]!) {
        checkoutLineItemsRemove(checkoutId: $checkoutId, lineItemIds: $lineItemIds) {
          userErrors {
            message
            field
          }
          checkout {
            webUrl
            subtotalPrice
            totalTax
            totalPrice
            lineItems (first:250) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  title
                  variant {
                    title
                    image {
                      src
                    }
                    price
                  }
                  quantity
                }
              }
            }
          }
        }
      }
    `, { checkoutId, lineItemIds: [lineItemId] }).then((res: { model: { checkoutLineItemsRemove: { checkout: {}; }; }; }) => {
      this.props.removeLineItemFromCart(res.model.checkoutLineItemsRemove.checkout)
    });
  }

  handleCartClose() {
    this.props.setCartClose()
  }

  getCurrentProducts() {
    const { currentPage, productsPerPage, products } = this.props
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexsOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexsOfFirstProduct, indexOfLastProduct)
    return currentProducts

  }

  public render() {
    return (
      <div>
          <div className="App">
            <Header/>
            <Router>
                <HomePage path='/' />
                <ProductPage path='/product' />
                <Cart path='/cart' 
                  updateQuantityInCart={this.updateQuantityInCart} 
                  removeLineItemInCart={this.removeLineItemInCart} 
                  handleCartClose={this.handleCartClose} />
              <Products path='/shop'
                products={this.getCurrentProducts()}
                addVariantToCart={this.addVariantToCart}
                checkout={this.props.checkout}
                productsPerPage={this.props.productsPerPage}
                totalProducts={this.props.products.length}
              />
            </Router>
            <Footer />
          </div>


      </div>
    );
  }
}

function mapStateToProps(state:State): State  {
  return {
    isCartOpen: state.isCartOpen,
    checkout: state.checkout,
    products: state.products,
    collections: state.collections,
    shop: state.shop,
    client: state.client,
    fetchCheckout: state.fetchCheckout,
    fetchProductsAndCollections: state.fetchProductsAndCollections,
    setCartOpen: state.setCartOpen,
    setCartClose: state.setCartClose,
    removeLineItemFromCart: state.removeLineItemFromCart,
    currentPage: state.currentPage,
    productsPerPage: state.productsPerPage
  }
}

function mapDispatchToProps(dispatch: (arg0: { type: string; payload?: any; }) => any): {} {
  return {
    fetchCheckout: (checkout) => dispatch(fetchCheckout(checkout)),
    fetchProductsAndCollections: (shop) => dispatch(fetchProductsAndCollections(shop)),
    setCartOpen: () => dispatch(setCartOpen()),
    setCartClose: () => dispatch(setCartClose()),
    removeLineItemFromCart: (checkout) => dispatch(removeLineItemFromCart(checkout))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)