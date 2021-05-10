import { combineReducers } from 'redux'
import cart from './cart/reducer'
import listProducts from './list_products/reducer'
import newProducts from './new_product/reducer'
import updateProducts from './update_product/reducer'
import deleteProducts from './delete_product/reducer'

export default combineReducers({
  cart,
  listProducts,
  newProducts,
  updateProducts,
  deleteProducts
})
