import React, { Component } from 'react';

class Basket extends Component {

  componentDidMount() {
    //console.log('did mount');
  }

  render() {
    return (
      <div className="basket">Basket {this.props.numItems}</div>
    )
  }
}

export default Basket
