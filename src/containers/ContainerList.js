import { connect } from 'react-redux'
import { addProducts, addToBasket } from '../actions/index.js'
import List from '../components/List'

const mapStateToProps = (state, ownProps) => {
  //console.log('state', state);

  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  //console.log('dispatch');

  return {
    addProducts: (data) => dispatch(addProducts(data)),
    addToBasket: (data) => dispatch(addToBasket(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
