import { all } from 'redux-saga/effects'

import cart from './cart/sagas'
import listProducts from './list_products/sagas'

export default function* rootSaga() {
  yield all([cart, listProducts])
}
