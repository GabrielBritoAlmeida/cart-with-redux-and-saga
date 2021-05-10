import { ActionTypes, INewProduct } from './types'

export function newProductsRequest(newProduct: INewProduct) {
  return {
    type: ActionTypes.newProductsRequest,
    payload: {
      newProduct
    }
  }
}

export function newProductsSuccess() {
  return {
    type: ActionTypes.newProductsSuccess
  }
}

export function newProductsFailure() {
  return {
    type: ActionTypes.newProductsFailure
  }
}
