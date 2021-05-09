import { ActionTypes, IProduct } from './types'

export function addProductToCartRequest(product: IProduct) {
  return {
    type: ActionTypes.addProductToCartRequest,
    payload: {
      product
    }
  }
}

export function addProductToCartSuccess(product: IProduct) {
  return {
    type: ActionTypes.addProductToCartSuccess,
    payload: {
      product
    }
  }
}

export function addProductToCartFailure(productId: number) {
  return {
    type: ActionTypes.addProductToCartFailure,
    payload: {
      productId
    }
  }
}

export function deleteProductCartRequest(id: number) {
  return {
    type: ActionTypes.deleteProductCartRequest,
    payload: {
      id
    }
  }
}

export function deleteProductCartSuccess(id: number) {
  return {
    type: ActionTypes.deleteProductCartSuccess,
    payload: {
      id
    }
  }
}

export function deleteProductCartFailure() {
  return {
    type: ActionTypes.deleteProductCartFailure
  }
}
