import {Component} from 'react';
import LineItem from '../lineItem/LineItem';
import { connect } from 'react-redux';
import { fetchCheckout, fetchProductsAndCollections, setCartOpen, removeLineItemFromCart } from '../store/actions';
import { RouteComponentProps } from '@reach/router';
import './Cart.css'

interface ICartProps extends RouteComponentProps {
  checkout: any,
  updateQuantityInCart: (...args:any) => any,
  removeLineItemInCart: (...args:any) => any,
  isCartOpen: boolean,
  handleCartClose: (...args:any) => any

}

class Cart extends Component<ICartProps> {
  constructor(props:ICartProps) {
    super(props);

    this.openCheckout = this.openCheckout.bind(this);
  }

  openCheckout() {
    window.open(this.props.checkout.webUrl);
  }

  render() {
    let line_items = this.props.checkout.lineItems.map((line_item:any ) => {
      return (
        <LineItem
          updateQuantityInCart={this.props.updateQuantityInCart}
          key={line_item.id.toString()}
          line_item={line_item}
          removeLineItemInCart={this.props.removeLineItemInCart}
        />
      );
    });

    return (
      <div className={`Cart ${this.props.isCartOpen ? 'Cart--open' : ''}`}>
        <header className="Cart__header">
          <h2>Your cart</h2>
          {/* <button
            onClick={this.props.handleCartClose}
            className="Cart__close">
            ×
          </button> */}
        </header>
        <ul className="Cart__line-items">
          {line_items}
        </ul>
        <footer className="Cart__footer">
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Subtotal</div>
            <div className="Cart-info__pricing">
              <span className="pricing">₴ {this.props.checkout.subtotalPrice}</span>
            </div>
          </div>
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Taxes</div>
            <div className="Cart-info__pricing">
              <span className="pricing">₴ {this.props.checkout.totalTax}</span>
            </div>
          </div>
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Total</div>
            <div className="Cart-info__pricing">
              <span className="pricing">₴ {this.props.checkout.totalPrice}</span>
            </div>
          </div>
          <button className="Cart__checkout button" onClick={this.openCheckout}>Checkout</button>
        </footer>
      </div>
    )
  }
}

function mapStateToProps(state: State) {
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
  }
}

function mapDispatchToProps(dispatch): {} {
  return {
    fetchCheckout: (checkout) => dispatch(fetchCheckout(checkout)),
    fetchProductsAndCollections: (shop) => dispatch(fetchProductsAndCollections(shop)),
    setCartOpen: () => dispatch(setCartOpen()),
    removeLineItemFromCart: (checkout) => dispatch(removeLineItemFromCart(checkout))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart) ;
