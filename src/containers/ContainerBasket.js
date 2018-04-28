import { connect } from 'react-redux';
import Basket from '../components/Basket';

const mapStateToProps = (state, ownProps) => {
  //console.log('state', state);

  return {
    numItems: state.basket.totalItems
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  //console.log('dispatch');

  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Basket)
