import { all, takeLatest, call, put } from 'redux-saga/effects'
import {
  addProductToCartFailure,
  addProductToCartRequest,
  addProductToCartSuccess
} from './action'

import { api } from 'services/api'
import { AxiosResponse } from 'axios'
import { ActionTypes, IProduct } from './types'

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>

function* ProductStockSaga({ payload }: CheckProductStockRequest) {
  const { product } = payload

  const availableStockResponse: AxiosResponse<IProduct> = yield call(
    api.get,
    `products/${product.id}`
  )

  if (availableStockResponse.data) {
    yield put(addProductToCartSuccess(product))
  } else {
    alert('Lamento, sem estoque do produto no momento!')
    yield put(addProductToCartFailure(product.id))
  }
}

export default all([
  takeLatest(ActionTypes.addProductToCartRequest, ProductStockSaga)
])
