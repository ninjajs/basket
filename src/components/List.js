import React, { Component } from 'react';
import Product from './Product';
import axios from 'axios';

//const List = ({ products, toggleProduct }) => {
class List extends Component {

  componentDidMount() {
    //console.log('did mount');

    axios.get('http://localhost:9001/products')
      .then(res => {
        console.log('products', res.data);

        this.props.addProducts(res.data);
      })
  }

  render() {
    return (
      <table className="products">
        <tbody>
        {this.props.products.map(product =>
            <Product
              key={product.sku}
              {...product}
              onClick={() => this.props.addToBasket(product)}
            />
        )}
        </tbody>
      </table>
    )
  }
}

export default List
