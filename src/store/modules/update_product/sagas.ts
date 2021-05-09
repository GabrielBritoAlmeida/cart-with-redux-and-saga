import { all, takeLatest, call, put } from 'redux-saga/effects'
import {
  updateProductsSuccess,
  updateProductsRequest,
  updateProductsFailure
} from './action'

import { api } from 'services/api'
import { AxiosResponse } from 'axios'
import { ActionTypes, IUpdateProduct } from './types'
import { listProductsRequest } from '../list_products/action'

type NewProduct = ReturnType<typeof updateProductsRequest>

function* UpdateProductSaga({ payload }: NewProduct) {
  const { updateProduct } = payload
  const { id, name, price } = updateProduct
  try {
    const response: AxiosResponse<IUpdateProduct> = yield call(
      api.post,
      'products',
      { id, name, price }
    )

    if (response.status === 200) {
      yield put(listProductsRequest())
      yield put(updateProductsSuccess(updateProduct))
    }
  } catch (error) {
    yield updateProductsFailure()
  }
}

export default all([
  takeLatest(ActionTypes.updateProductsSuccess, UpdateProductSaga)
])
