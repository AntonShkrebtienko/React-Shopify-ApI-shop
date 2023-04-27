"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Product_1 = __importDefault(require("../product/Product"));
const react_redux_1 = require("react-redux");
require("./products.css");
const Pagination_1 = __importDefault(require("../pagination/Pagination"));
const actions_1 = require("../store/actions");
class Products extends react_1.Component {
    render() {
        let currentProducts = this.props.products.map((product) => {
            return ((0, jsx_runtime_1.jsx)(Product_1.default, { addVariantToCart: this.props.addVariantToCart, product: product, checkout: this.props.checkout }, product.id.toString()));
        });
        return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "Product-wrapper" }, { children: [currentProducts, (0, jsx_runtime_1.jsx)(Pagination_1.default, { productsPerPage: this.props.productsPerPage, totalProducts: this.props.totalProducts, setCurrentPage: this.props.setCurrentPage }, void 0)] }), void 0));
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setCurrentPage: (pageNumber) => dispatch((0, actions_1.setCurrentPage)(pageNumber))
    };
}
exports.default = (0, react_redux_1.connect)(null, mapDispatchToProps)(Products);
