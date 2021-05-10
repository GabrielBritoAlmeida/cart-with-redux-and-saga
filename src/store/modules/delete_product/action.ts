import { ActionTypes } from './types'

export function deleteProductsRequest(deleteId: string) {
  return {
    type: ActionTypes.deleteProductsRequest,
    payload: {
      deleteId
    }
  }
}

export function deleteProductsSuccess() {
  return {
    type: ActionTypes.deleteProductsSuccess
  }
}

export function deleteProductsFailure() {
  return {
    type: ActionTypes.deleteProductsFailure
  }
}
