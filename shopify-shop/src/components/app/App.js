"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const Products_1 = __importDefault(require("../pages/Products"));
const Cart_1 = __importDefault(require("../cart/Cart"));
const babel_plugin_graphql_js_client_transform_1 = __importDefault(require("babel-plugin-graphql-js-client-transform"));
const graphql_js_client_1 = __importDefault(require("graphql-js-client"));
const types_1 = __importDefault(require("../../types"));
const Header_1 = __importDefault(require("../header/Header"));
const Footer_1 = __importDefault(require("../footer/Footer"));
const actions_1 = require("../store/actions");
const router_1 = require("@reach/router");
const react_redux_1 = require("react-redux");
const HomePage_1 = __importDefault(require("../pages/HomePage"));
const ProductPage_1 = __importDefault(require("../pages/ProductPage"));
class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleCartClose = this.handleCartClose.bind(this);
        this.addVariantToCart = this.addVariantToCart.bind(this);
        this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
        this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
    }
    componentWillMount() {
        const client = new graphql_js_client_1.default(types_1.default, {
            url: 'https://react-shopif-learning.myshopify.com/api/graphql',
            fetcherOptions: {
                headers: {
                    'X-Shopify-Storefront-Access-Token': '227821f603702e6f56e9a05d3135db76'
                }
            }
        });
        client.send((0, babel_plugin_graphql_js_client_transform_1.default)(this.props.client) `
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
    `).then((res) => {
            this.props.fetchCheckout(res.model.checkoutCreate.checkout);
        });
        client.send((0, babel_plugin_graphql_js_client_transform_1.default)(this.props.client) `
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
    `).then((res) => {
            this.props.fetchProductsAndCollections(res.model.shop);
        });
    }
    addVariantToCart(variantId, quantity) {
        const client = new graphql_js_client_1.default(types_1.default, {
            url: 'https://react-shopif-learning.myshopify.com/api/graphql',
            fetcherOptions: {
                headers: {
                    'X-Shopify-Storefront-Access-Token': '227821f603702e6f56e9a05d3135db76'
                }
            }
        });
        this.props.setCartOpen();
        const lineItems = [{ variantId, quantity: parseInt(quantity, 10) }];
        const checkoutId = this.props.checkout.id;
        client.send((0, babel_plugin_graphql_js_client_transform_1.default)(this.props.client) `
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
      `, { checkoutId, lineItems }).then((res) => {
            this.props.fetchCheckout(res.model.checkoutLineItemsAdd.checkout);
        });
    }
    updateQuantityInCart(lineItemId, quantity) {
        const client = new graphql_js_client_1.default(types_1.default, {
            url: 'https://react-shopif-learning.myshopify.com/api/graphql',
            fetcherOptions: {
                headers: {
                    'X-Shopify-Storefront-Access-Token': '227821f603702e6f56e9a05d3135db76'
                }
            }
        });
        const checkoutId = this.props.checkout.id;
        const lineItems = [{ id: lineItemId, quantity: parseInt(quantity, 10) }];
        return client.send((0, babel_plugin_graphql_js_client_transform_1.default)(this.props.client) `
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
    `, { checkoutId, lineItems }).then((res) => {
            this.props.fetchCheckout(res.model.checkoutLineItemsUpdate.checkout);
        });
    }
    removeLineItemInCart(lineItemId) {
        const client = new graphql_js_client_1.default(types_1.default, {
            url: 'https://react-shopif-learning.myshopify.com/api/graphql',
            fetcherOptions: {
                headers: {
                    'X-Shopify-Storefront-Access-Token': '227821f603702e6f56e9a05d3135db76'
                }
            }
        });
        const checkoutId = this.props.checkout.id;
        return client.send((0, babel_plugin_graphql_js_client_transform_1.default)(this.props.client) `
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
    `, { checkoutId, lineItemIds: [lineItemId] }).then((res) => {
            this.props.removeLineItemFromCart(res.model.checkoutLineItemsRemove.checkout);
        });
    }
    handleCartClose() {
        this.props.setCartClose();
    }
    getCurrentProducts() {
        const { currentPage, productsPerPage, products } = this.props;
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexsOfFirstProduct = indexOfLastProduct - productsPerPage;
        const currentProducts = products.slice(indexsOfFirstProduct, indexOfLastProduct);
        return currentProducts;
    }
    render() {
        return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "App" }, { children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}, void 0), (0, jsx_runtime_1.jsxs)(router_1.Router, { children: [(0, jsx_runtime_1.jsx)(HomePage_1.default, { path: '/' }, void 0), (0, jsx_runtime_1.jsx)(ProductPage_1.default, { path: '/product' }, void 0), (0, jsx_runtime_1.jsx)(Cart_1.default, { path: '/cart', updateQuantityInCart: this.updateQuantityInCart, removeLineItemInCart: this.removeLineItemInCart, handleCartClose: this.handleCartClose }, void 0), (0, jsx_runtime_1.jsx)(Products_1.default, { path: '/shop', products: this.getCurrentProducts(), addVariantToCart: this.addVariantToCart, checkout: this.props.checkout, productsPerPage: this.props.productsPerPage, totalProducts: this.props.products.length }, void 0)] }, void 0), (0, jsx_runtime_1.jsx)(Footer_1.default, {}, void 0)] }), void 0) }, void 0));
    }
}
function mapStateToProps(state) {
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
    };
}
function mapDispatchToProps(dispatch) {
    return {
        fetchCheckout: (checkout) => dispatch((0, actions_1.fetchCheckout)(checkout)),
        fetchProductsAndCollections: (shop) => dispatch((0, actions_1.fetchProductsAndCollections)(shop)),
        setCartOpen: () => dispatch((0, actions_1.setCartOpen)()),
        setCartClose: () => dispatch((0, actions_1.setCartClose)()),
        removeLineItemFromCart: (checkout) => dispatch((0, actions_1.removeLineItemFromCart)(checkout))
    };
}
exports.default = (0, react_redux_1.connect)(mapStateToProps, mapDispatchToProps)(App);
