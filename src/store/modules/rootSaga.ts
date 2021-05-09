import { all } from 'redux-saga/effects'

import cart from './cart/sagas'
import listProducts from './list_products/sagas'
import newProducts from './new_product/sagas'
import updateProducts from './update_product/sagas'

export default function* rootSaga() {
  yield all([cart, listProducts, newProducts, updateProducts])
}
