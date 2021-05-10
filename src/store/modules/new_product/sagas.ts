import { all, takeLatest, call, put } from 'redux-saga/effects'
import {
  newProductsSuccess,
  newProductsFailure,
  newProductsRequest
} from './action'

import { api } from 'services/api'
import { AxiosResponse } from 'axios'
import { ActionTypes, INewProduct } from './types'
import { listProductsRequest } from '../list_products/action'

type NewProduct = ReturnType<typeof newProductsRequest>

function* NewProductSaga({ payload }: NewProduct) {
  const { newProduct } = payload
  const { name, price } = newProduct
  try {
    const response: AxiosResponse<INewProduct> = yield call(
      api.post,
      'products',
      { name, price }
    )

    if (response.status === 201) {
      yield put(listProductsRequest())
      yield put(newProductsSuccess())
    }
  } catch (error) {
    yield newProductsFailure()
  }
}

export default all([takeLatest(ActionTypes.newProductsRequest, NewProductSaga)])
