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

type UpdateProduct = ReturnType<typeof updateProductsRequest>

function* UpdateProductSaga({ payload }: UpdateProduct) {
  const { updateProduct } = payload
  const { id, name, price } = updateProduct
  console.log(
    '🚀 ~ file: sagas.ts ~ line 17 ~ function*UpdateProductSaga ~ updateProduct',
    updateProduct
  )
  try {
    const response: AxiosResponse<IUpdateProduct> = yield call(
      api.put,
      `products/${id}`,
      { name, price }
    )
    console.log(
      '🚀 ~ file: sagas.ts ~ line 20 ~ function*UpdateProductSaga ~ response',
      response
    )

    if (response.status === 200) {
      yield put(listProductsRequest())
      yield put(updateProductsSuccess())
    }
  } catch (error) {
    yield updateProductsFailure()
  }
}

export default all([
  takeLatest(ActionTypes.updateProductsRequest, UpdateProductSaga)
])