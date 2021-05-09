import { all, takeLatest, call, put } from 'redux-saga/effects'
import {
  addProductToCartFailure,
  addProductToCartRequest,
  addProductToCartSuccess,
  deleteProductCartRequest,
  removeProductToCartSuccess,
  removeProductToCartFailure,
  deleteProductCartSuccess
} from './action'

import { api } from 'services/api'
import { AxiosResponse } from 'axios'
import { ActionTypes, IProduct } from './types'

type ProductStockSagaRequest = ReturnType<typeof addProductToCartRequest>
type DeleteProduct = ReturnType<typeof deleteProductCartRequest>

function* ProductStockSaga({ payload }: ProductStockSagaRequest) {
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

function* RemoveProductStockSaga({ payload }: ProductStockSagaRequest) {
  const { product } = payload
  try {
    yield put(removeProductToCartSuccess(product))
  } catch (error) {
    yield put(removeProductToCartFailure(product.id))
  }
}

function* DeleteProductStockSaga({ payload }: DeleteProduct) {
  try {
    const { id } = payload
    yield put(deleteProductCartSuccess(id))
    alert(`Produto deletado com sucesso!`)
  } catch (error) {
    alert(`Erro ao deletar o item!`)
  }
}

export default all([
  takeLatest(ActionTypes.addProductToCartRequest, ProductStockSaga),
  takeLatest(ActionTypes.removeProductToCartRequest, RemoveProductStockSaga),
  takeLatest(ActionTypes.deleteProductCartRequest, DeleteProductStockSaga)
])
