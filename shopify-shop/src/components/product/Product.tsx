import { Link } from '@reach/router';
import React, { Component, DetailedHTMLProps, HTMLAttributes } from 'react';
import VariantSelector from '../variant-selector/VariantSelector';

class Product extends Component<IProductProps, IProductsState> {
  constructor(props: any) {
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
    this.props.product.options.forEach((selector: { name: any; values: { value: any; }[]; }) => {
      this.setState({
        selectedOptions: { [selector.name]: selector.values[0].value }
      });
    });
  }

  findImage(images: any[], variantId: any) {
    const primary = images[0];

    const image = images.filter(function (image: { variant_ids: string | any[] | any; }) {
      return image.variant_ids.includes(variantId);
    })[0];

    return (image || primary).src;
  }

  handleOptionChange(event: { target: any; }) {
    const target = event.target
    let selectedOptions = this.state.selectedOptions;
    selectedOptions[target.name] = target.value;

    const selectedVariant = this.props.product.variants.find((variant: { selectedOptions: any[]; }) => {
      return variant.selectedOptions.every((selectedOption: { name: string | number; value: { valueOf: () => any; }; }) => {
        return selectedOptions[selectedOption.name] === selectedOption.value.valueOf();
      });
    });

    this.setState({
      selectedVariant: selectedVariant,
      selectedVariantImage: selectedVariant.attrs.image.src
    });
  }

  handleQuantityChange(event: { target: { value: any; }; }) {
    this.setState({
      selectedVariantQuantity: event.target.value
    });
  }
  onHoverHandler() {
    this.setState({
      isHovered: !this.state.isHovered
    })
  }

  render() {

    let variantImage = this.state.selectedVariantImage || this.props.product.images[0].src
    let variant = this.state.selectedVariant || this.props.product.variants[0]
    const hiddenBlockHeight = () => {
      return `${this.state.isHovered ? '100%': '0px'}`
    }
    const actualHeight = {
      heigth: hiddenBlockHeight()
    }
    return (
      <div className="Product"
      onMouseEnter={() => this.onHoverHandler()}
      onMouseLeave={() => this.onHoverHandler()}>

        {this.props.product.images.length ?
          <figure className='Product__body'>
            <img src={variantImage} alt={`${this.props.product.title} product shot`} />
            <figcaption className='Product__category'>{this.props.product.collections[0].title}</figcaption>
          </figure>
          : null}
        <div className='Product__description'>
          <h5 className="Product__title">{this.props.product.title}</h5>
          <span className="Product__price">₴{variant.price}</span>
        </div>
        {this.state.isHovered ?
          <div className="hidden-wrapper" style={{height: actualHeight.heigth}}>
            <Link to="shop/product" className="Product__link">
              <span className="v-btn__content">VIEW</span>
            </Link>
          </div>
          : null}

      </div>

    );
  }
}

export default Product;



// let variantImage = this.state.selectedVariantImage || this.props.product.images[0].src
// let variant = this.state.selectedVariant || this.props.product.variants[0]
// let variantQuantity = this.state.selectedVariantQuantity || 1
// let variantSelectors = this.props.product.options.map((option: any) => {
//   return (
//     <VariantSelector
//       option={option}
//       handleOptionChange={this.handleOptionChange}
//       key={option.id.toString()}
//     />
//   );
// });
// return (
//   <div className="Product">
//     {this.props.product.images.length ? <img src={variantImage} alt={`${this.props.product.title} product shot`}/> : null}
//     <h5 className="Product__title">{this.props.product.title}</h5>
//     <span className="Product__price">₴{variant.price}</span>
//     {variantSelectors}
//     <label className="Product__option">
//       Quantity
//       <input min="1" type="number" defaultValue={variantQuantity} onChange={this.handleQuantityChange}></input>
//     </label>
//     <button className="Product__buy button" onClick={() => this.props.addVariantToCart(variant.id, variantQuantity)}>Add to Cart</button>
//   </div>