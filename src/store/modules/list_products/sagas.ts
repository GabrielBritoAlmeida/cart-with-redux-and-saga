import { all, takeLatest, call, put } from 'redux-saga/effects'
import { listProductsFailure, listProductsSuccess } from './action'

import { api } from 'services/api'
import { AxiosResponse } from 'axios'
import { ActionTypes, IProduct } from './types'

function* listProductsSaga() {
  try {
    const response: AxiosResponse<IProduct[]> = yield call(api.get, 'products')

    if (response.status === 200) {
      yield put(listProductsSuccess(response.data))
    }
  } catch (error) {
    yield listProductsFailure()
  }
}

export default all([
  takeLatest(ActionTypes.listProductsRequest, listProductsSaga)
])
