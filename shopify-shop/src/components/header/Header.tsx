import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "@reach/router"
import { connect } from 'react-redux';

import './header.css'

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header className="App__header">
            <div className='header-wrapper'>
                <div className='header__logo'>
                    <a href="/" className='header-link'>
                        <FontAwesomeIcon icon={faTruck} className='header__icon'/>
                        <span>ShipIT</span>
                    </a>
                </div>
                <div className='header__icon i-cart'>
                    <Link to='cart' className='header-link header-link__cart'>
                        <FontAwesomeIcon icon={faShoppingCart}/>
                        <span className='cart-counter'>{props.checkout.lineItems.length}</span>
                    </Link>
                </div>
            </div>
            <div className='nav-wrapper'>
                <nav className='header-nav'>
                    <ul>
                        <li className='header-nav__item'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='header-nav__item'>
                            <Link to='shop'>Shop</Link>
                        </li>
                        <li className='header-nav__item'>
                            <Link to='shop/product'>Product</Link>
                        </li>
                        <li className='header-nav__item'>
                            <a href="#">Blog</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

function mapStateToProps(state: State) {
    return {
        checkout: state.checkout
    }
}

export default connect(mapStateToProps)(Header);
