import { all } from 'redux-saga/effects'

import cart from './cart/sagas'
import listProducts from '../modules/product/list_products/sagas'
import newProducts from '../modules/product/new_product/sagas'
import updateProducts from '../modules/product/update_product/sagas'
import deleteProducts from '../modules/product/delete_product/sagas'

export default function* rootSaga() {
  yield all([cart, listProducts, newProducts, updateProducts, deleteProducts])
}
