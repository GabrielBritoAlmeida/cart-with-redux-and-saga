import { combineReducers } from 'redux'
import cart from './cart/reducer'
import listProducts from './list_products/reducer'

export default combineReducers({
  cart,
  listProducts
})
