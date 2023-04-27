"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const router_1 = require("@reach/router");
const react_redux_1 = require("react-redux");
require("./header.css");
const Header = (props) => {
    return ((0, jsx_runtime_1.jsxs)("header", Object.assign({ className: "App__header" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'header-wrapper' }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'header__logo' }, { children: (0, jsx_runtime_1.jsxs)("a", Object.assign({ href: "/", className: 'header-link' }, { children: [(0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faTruck, className: 'header__icon' }, void 0), (0, jsx_runtime_1.jsx)("span", { children: "ShipIT" }, void 0)] }), void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'header__icon i-cart' }, { children: (0, jsx_runtime_1.jsxs)(router_1.Link, Object.assign({ to: 'cart', className: 'header-link header-link__cart' }, { children: [(0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faShoppingCart }, void 0), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'cart-counter' }, { children: props.checkout.lineItems.length }), void 0)] }), void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'nav-wrapper' }, { children: (0, jsx_runtime_1.jsx)("nav", Object.assign({ className: 'header-nav' }, { children: (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", Object.assign({ className: 'header-nav__item' }, { children: (0, jsx_runtime_1.jsx)(router_1.Link, Object.assign({ to: '/' }, { children: "Home" }), void 0) }), void 0), (0, jsx_runtime_1.jsx)("li", Object.assign({ className: 'header-nav__item' }, { children: (0, jsx_runtime_1.jsx)(router_1.Link, Object.assign({ to: 'shop' }, { children: "Shop" }), void 0) }), void 0), (0, jsx_runtime_1.jsx)("li", Object.assign({ className: 'header-nav__item' }, { children: (0, jsx_runtime_1.jsx)(router_1.Link, Object.assign({ to: 'shop/product' }, { children: "Product" }), void 0) }), void 0), (0, jsx_runtime_1.jsx)("li", Object.assign({ className: 'header-nav__item' }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ href: "#" }, { children: "Blog" }), void 0) }), void 0)] }, void 0) }), void 0) }), void 0)] }), void 0));
};
function mapStateToProps(state) {
    return {
        checkout: state.checkout
    };
}
exports.default = (0, react_redux_1.connect)(mapStateToProps)(Header);
