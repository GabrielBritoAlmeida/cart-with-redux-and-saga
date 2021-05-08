import { all, takeLatest, call, put } from 'redux-saga/effects'
import { listProductsFailure, listProductsSuccess } from './action'

import { api } from 'services/api'
import { AxiosResponse } from 'axios'
import { ActionTypes, IListProductsState } from './types'

function* listProductsSaga() {
  try {
    const response: AxiosResponse<IListProductsState> = yield call(
      api.get,
      'products'
    )

    if (response.data.items) {
      yield put(listProductsSuccess())
    }
  } catch (error) {
    yield listProductsFailure()
  }
}

export default all([
  takeLatest(ActionTypes.listProductsRequest, listProductsSaga)
])
