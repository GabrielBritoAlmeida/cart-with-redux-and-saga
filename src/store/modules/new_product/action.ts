import { ActionTypes, INewProduct } from './types'

export function newProductsRequest(newProduct: INewProduct) {
  return {
    type: ActionTypes.newProductsRequest,
    payload: {
      newProduct
    }
  }
}

export function newProductsSuccess(newProduct: INewProduct) {
  return {
    type: ActionTypes.newProductsSuccess,
    payload: {
      newProduct
    }
  }
}

export function newProductsFailure() {
  return {
    type: ActionTypes.newProductsFailure
  }
}
