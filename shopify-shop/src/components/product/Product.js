"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const router_1 = require("@reach/router");
const react_1 = require("react");
class Product extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOptions: null,
            selectedVariant: null,
            selectedVariantImage: null,
            selectedVariantQuantity: null,
            isHovered: false,
        };
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.findImage = this.findImage.bind(this);
    }
    componentWillMount() {
        this.props.product.options.forEach((selector) => {
            this.setState({
                selectedOptions: { [selector.name]: selector.values[0].value }
            });
        });
    }
    findImage(images, variantId) {
        const primary = images[0];
        const image = images.filter(function (image) {
            return image.variant_ids.includes(variantId);
        })[0];
        return (image || primary).src;
    }
    handleOptionChange(event) {
        const target = event.target;
        let selectedOptions = this.state.selectedOptions;
        selectedOptions[target.name] = target.value;
        const selectedVariant = this.props.product.variants.find((variant) => {
            return variant.selectedOptions.every((selectedOption) => {
                return selectedOptions[selectedOption.name] === selectedOption.value.valueOf();
            });
        });
        this.setState({
            selectedVariant: selectedVariant,
            selectedVariantImage: selectedVariant.attrs.image.src
        });
    }
    handleQuantityChange(event) {
        this.setState({
            selectedVariantQuantity: event.target.value
        });
    }
    onHoverHandler() {
        this.setState({
            isHovered: !this.state.isHovered
        });
    }
    render() {
        let variantImage = this.state.selectedVariantImage || this.props.product.images[0].src;
        let variant = this.state.selectedVariant || this.props.product.variants[0];
        const hiddenBlockHeight = () => {
            return `${this.state.isHovered ? '100%' : '0px'}`;
        };
        const actualHeight = {
            heigth: hiddenBlockHeight()
        };
        return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "Product", onMouseEnter: () => this.onHoverHandler(), onMouseLeave: () => this.onHoverHandler() }, { children: [this.props.product.images.length ?
                    (0, jsx_runtime_1.jsxs)("figure", Object.assign({ className: 'Product__body' }, { children: [(0, jsx_runtime_1.jsx)("img", { src: variantImage, alt: `${this.props.product.title} product shot` }, void 0), (0, jsx_runtime_1.jsx)("figcaption", Object.assign({ className: 'Product__category' }, { children: this.props.product.collections[0].title }), void 0)] }), void 0)
                    : null, (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'Product__description' }, { children: [(0, jsx_runtime_1.jsx)("h5", Object.assign({ className: "Product__title" }, { children: this.props.product.title }), void 0), (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "Product__price" }, { children: ["\u20B4", variant.price] }), void 0)] }), void 0), this.state.isHovered ?
                    (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "hidden-wrapper", style: { height: actualHeight.heigth } }, { children: (0, jsx_runtime_1.jsx)(router_1.Link, Object.assign({ to: "shop/product", className: "Product__link" }, { children: (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "v-btn__content" }, { children: "VIEW" }), void 0) }), void 0) }), void 0)
                    : null] }), void 0));
    }
}
exports.default = Product;
