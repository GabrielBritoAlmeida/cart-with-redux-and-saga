import { all, takeLatest, call, put } from 'redux-saga/effects'
import {
  deleteProductsFailure,
  deleteProductsRequest,
  deleteProductsSuccess
} from './action'

import { api } from 'services/api'
import { AxiosResponse } from 'axios'
import { ActionTypes, IDeleteProduct } from './types'
import { listProductsRequest } from '../list_products/action'

type UpdateProduct = ReturnType<typeof deleteProductsRequest>

function* DeleteProductSaga({ payload }: UpdateProduct) {
  const { deleteId } = payload

  try {
    const response: AxiosResponse<IDeleteProduct> = yield call(
      api.delete,
      `products/${deleteId}`
    )

    if (response.status === 200) {
      yield put(listProductsRequest())
      yield put(deleteProductsSuccess())
    }
  } catch (error) {
    yield deleteProductsFailure()
  }
}

export default all([
  takeLatest(ActionTypes.deleteProductsRequest, DeleteProductSaga)
])
