import { ActionTypes, IUpdateProduct } from './types'

export function updateProductsRequest(updateProduct: IUpdateProduct) {
  return {
    type: ActionTypes.updateProductsRequest,
    payload: {
      updateProduct
    }
  }
}

export function updateProductsSuccess() {
  return {
    type: ActionTypes.updateProductsSuccess
  }
}

export function updateProductsFailure() {
  return {
    type: ActionTypes.updateProductsFailure
  }
}
