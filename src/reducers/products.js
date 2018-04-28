
const products = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCTS':
      //console.log('add products', action);
      return action.data
    default:
      return state
  }
}

export default products
