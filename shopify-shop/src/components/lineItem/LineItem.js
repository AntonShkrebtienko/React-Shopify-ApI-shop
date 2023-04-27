"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
class LineItem extends react_1.Component {
    constructor(props) {
        super(props);
        this.decrementQuantity = this.decrementQuantity.bind(this);
        this.incrementQuantity = this.incrementQuantity.bind(this);
    }
    decrementQuantity(lineItemId) {
        const updatedQuantity = this.props.line_item.quantity - 1;
        this.props.updateQuantityInCart(lineItemId, updatedQuantity);
    }
    incrementQuantity(lineItemId) {
        const updatedQuantity = this.props.line_item.quantity + 1;
        this.props.updateQuantityInCart(lineItemId, updatedQuantity);
    }
    render() {
        return ((0, jsx_runtime_1.jsxs)("li", Object.assign({ className: "Line-item" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "Line-item__img" }, { children: this.props.line_item.variant.image ? (0, jsx_runtime_1.jsx)("img", { src: this.props.line_item.variant.image.src, alt: `${this.props.line_item.title} product shot` }, void 0) : null }), void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "Line-item__content" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "Line-item__content-row" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "Line-item__variant-title" }, { children: this.props.line_item.variant.title }), void 0), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "Line-item__title" }, { children: this.props.line_item.title }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "Line-item__content-row" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "Line-item__quantity-container" }, { children: [(0, jsx_runtime_1.jsx)("button", Object.assign({ className: "Line-item__quantity-update", onClick: () => this.decrementQuantity(this.props.line_item.id) }, { children: "-" }), void 0), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "Line-item__quantity" }, { children: this.props.line_item.quantity }), void 0), (0, jsx_runtime_1.jsx)("button", Object.assign({ className: "Line-item__quantity-update", onClick: () => this.incrementQuantity(this.props.line_item.id) }, { children: "+" }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "Line-item__price" }, { children: ["\u20B4 ", (this.props.line_item.quantity * this.props.line_item.variant.price).toFixed(2)] }), void 0), (0, jsx_runtime_1.jsx)("button", Object.assign({ className: "Line-item__remove", onClick: () => this.props.removeLineItemInCart(this.props.line_item.id) }, { children: "\u00D7" }), void 0)] }), void 0)] }), void 0)] }), void 0));
    }
}
exports.default = LineItem;
