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

export function removeProductToCartRequest(product: IProduct) {
  return {
    type: ActionTypes.removeProductToCartRequest,
    payload: {
      product
    }
  }
}

export function removeProductToCartSuccess(product: IProduct) {
  return {
    type: ActionTypes.removeProductToCartSuccess,
    payload: {
      product
    }
  }
}

export function removeProductToCartFailure(productId: number) {
  return {
    type: ActionTypes.removeProductToCartFailure,
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
