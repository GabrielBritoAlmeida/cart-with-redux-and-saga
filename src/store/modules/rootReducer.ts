import { combineReducers } from 'redux'
import cart from './cart/reducer'
import listProducts from '../modules/product/list_products/reducer'
import newProducts from '../modules/product/new_product/reducer'
import updateProducts from '../modules/product/update_product/reducer'
import deleteProducts from '../modules/product/delete_product/reducer'

export default combineReducers({
  cart,
  listProducts,
  newProducts,
  updateProducts,
  deleteProducts
})
