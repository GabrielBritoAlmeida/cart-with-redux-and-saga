import { all, takeLatest, call, put } from 'redux-saga/effects'
import {
  addProductToCartFailure,
  addProductToCartRequest,
  addProductToCartSuccess,
  deleteProductToCartRequest
} from './action'

import { api } from 'services/api'
import { AxiosResponse } from 'axios'
import { ActionTypes, IProduct, ICartItem } from './types'

type ProductStockSagaRequest = ReturnType<typeof addProductToCartRequest>
type DeleteProduct = ReturnType<typeof deleteProductToCartRequest>

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

function* DeleteProductStockSaga({ payload }: DeleteProduct) {
  const { id } = payload

  const availableStockResponse: AxiosResponse<ICartItem> = yield call(
    api.delete,
    `products/${id}`
  )

  if (availableStockResponse.status === 200) {
    alert(`Produto deletado com sucesso!`)
  } else {
    alert(`Erro ao deletar o produto!`)
  }
}

export default all([
  takeLatest(ActionTypes.addProductToCartRequest, ProductStockSaga),
  takeLatest(ActionTypes.deleteProductCartRequest, DeleteProductStockSaga)
])
