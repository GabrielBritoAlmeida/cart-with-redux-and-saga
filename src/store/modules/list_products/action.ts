import { ActionTypes } from './types'

export function listProductsRequest() {
  return {
    type: ActionTypes.listProductsRequest
  }
}

export function listProductsSuccess() {
  return {
    type: ActionTypes.listProductsSuccess
  }
}

export function listProductsFailure() {
  return {
    type: ActionTypes.listProductsFailure
  }
}
