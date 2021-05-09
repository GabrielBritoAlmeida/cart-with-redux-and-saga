import { combineReducers } from 'redux'
import cart from './cart/reducer'
import listProducts from './list_products/reducer'
import newProducts from './new_product/reducer'

export default combineReducers({
  cart,
  listProducts,
  newProducts
})
