"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const LineItem_1 = __importDefault(require("../lineItem/LineItem"));
const react_redux_1 = require("react-redux");
const actions_1 = require("../store/actions");
require("./Cart.css");
class Cart extends react_1.Component {
    constructor(props) {
        super(props);
        this.openCheckout = this.openCheckout.bind(this);
    }
    openCheckout() {
        window.open(this.props.checkout.webUrl);
    }
    render() {
        let line_items = this.props.checkout.lineItems.map((line_item) => {
            return ((0, jsx_runtime_1.jsx)(LineItem_1.default, { updateQuantityInCart: this.props.updateQuantityInCart, line_item: line_item, removeLineItemInCart: this.props.removeLineItemInCart }, line_item.id.toString()));
        });
        return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: `Cart ${this.props.isCartOpen ? 'Cart--open' : ''}` }, { children: [(0, jsx_runtime_1.jsx)("header", Object.assign({ className: "Cart__header" }, { children: (0, jsx_runtime_1.jsx)("h2", { children: "Your cart" }, void 0) }), void 0), (0, jsx_runtime_1.jsx)("ul", Object.assign({ className: "Cart__line-items" }, { children: line_items }), void 0), (0, jsx_runtime_1.jsxs)("footer", Object.assign({ className: "Cart__footer" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "Cart-info clearfix" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "Cart-info__total Cart-info__small" }, { children: "Subtotal" }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "Cart-info__pricing" }, { children: (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "pricing" }, { children: ["\u20B4 ", this.props.checkout.subtotalPrice] }), void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "Cart-info clearfix" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "Cart-info__total Cart-info__small" }, { children: "Taxes" }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "Cart-info__pricing" }, { children: (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "pricing" }, { children: ["\u20B4 ", this.props.checkout.totalTax] }), void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "Cart-info clearfix" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "Cart-info__total Cart-info__small" }, { children: "Total" }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "Cart-info__pricing" }, { children: (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "pricing" }, { children: ["\u20B4 ", this.props.checkout.totalPrice] }), void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)("button", Object.assign({ className: "Cart__checkout button", onClick: this.openCheckout }, { children: "Checkout" }), void 0)] }), void 0)] }), void 0));
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
        removeLineItemFromCart: state.removeLineItemFromCart
    };
}
function mapDispatchToProps(dispatch) {
    return {
        fetchCheckout: (checkout) => dispatch((0, actions_1.fetchCheckout)(checkout)),
        fetchProductsAndCollections: (shop) => dispatch((0, actions_1.fetchProductsAndCollections)(shop)),
        setCartOpen: () => dispatch((0, actions_1.setCartOpen)()),
        removeLineItemFromCart: (checkout) => dispatch((0, actions_1.removeLineItemFromCart)(checkout))
    };
}
exports.default = (0, react_redux_1.connect)(mapStateToProps, mapDispatchToProps)(Cart);
