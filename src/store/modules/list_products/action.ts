import { ActionTypes, IProduct } from './types'

export function listProductsRequest() {
  return {
    type: ActionTypes.listProductsRequest
  }
}

export function listProductsSuccess(list: IProduct[]) {
  return {
    type: ActionTypes.listProductsSuccess,
    payload: {
      list
    }
  }
}

export function listProductsFailure() {
  return {
    type: ActionTypes.listProductsFailure
  }
}
