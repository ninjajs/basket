
const basket = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      //console.log('add product', action);
      var newState;

      if (!state.items[action.data.sku]) {
        //console.log('new items');
        newState = Object.assign({}, state);
        newState.items[action.data.sku] = 1;
        newState.totalItems++;
        return newState;
      }
      else {
        //console.log('old items',state.items[action.data.sku]);
        if (state.items[action.data.sku] >= 10) {
          console.log('limit reached')
          return state;
        }
        else {
          newState = Object.assign({}, state);
          newState.items[action.data.sku] = newState.items[action.data.sku]+1;
          newState.totalItems++;
          return newState;
        }
      }

    default:
      return state
  }
}

export default basket
