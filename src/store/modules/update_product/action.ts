import { ActionTypes, IUpdateProduct } from './types'

export function updateProductsRequest(updateProduct: IUpdateProduct) {
  return {
    type: ActionTypes.updateProductsRequest,
    payload: {
      updateProduct
    }
  }
}

export function updateProductsSuccess(updateProduct: IUpdateProduct) {
  return {
    type: ActionTypes.updateProductsSuccess,
    payload: {
      updateProduct
    }
  }
}

export function updateProductsFailure() {
  return {
    type: ActionTypes.updateProductsFailure
  }
}
