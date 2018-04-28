import React from 'react'

const Product = ({ onClick, name, price }) => (
  <tr>
    <td>{name}</td>
    <td>${price}</td>
    <td><button onClick={onClick}>Add to basket</button></td>
  </tr>
)

export default Product
