
import React, { Component } from 'react';
import Product from '../product/Product';
import { RouteComponentProps } from '@reach/router';
import { connect } from 'react-redux';
import './products.css'
import Pagination from '../pagination/Pagination';
import { setCurrentPage } from '../store/actions';

interface IProductsProps extends RouteComponentProps  {
  products: any,
  addVariantToCart: (...args:any) => any,
  checkout?: {
    id: any,
    webUrl: any,
    lineItems: [],
    totalPrice: any,
    totalTax: any,
    subtotalPrice: any
  },
  productsPerPage: number,
  totalProducts: number,
  setCurrentPage: (arg0: number) => number
}

class Products extends Component<IProductsProps> {


  render() {

    let currentProducts = this.props.products.map((product:any) => {
      return (
        <Product
          addVariantToCart={this.props.addVariantToCart}
          key={product.id.toString()}
          product={product}
          checkout={this.props.checkout}
        />
      );
    });

    return (

        <div className="Product-wrapper">
          {currentProducts}
          <Pagination 
            productsPerPage={this.props.productsPerPage} 
            totalProducts={this.props.totalProducts}
            setCurrentPage={this.props.setCurrentPage}
           />
        </div>


    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setCurrentPage: (pageNumber) => dispatch(setCurrentPage(pageNumber))
  }
}

export default connect(null, mapDispatchToProps)(Products) ;
