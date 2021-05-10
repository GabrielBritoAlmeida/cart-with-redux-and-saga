export enum ActionTypes {
  addProductToCartRequest = 'ADD_PRODUCT_TO_REQUEST',
  addProductToCartFailure = 'ADD_PRODUCT_TO_FAILURE',
  addProductToCartSuccess = 'ADD_PRODUCT_TO_SUCCESS',

  removeProductToCartRequest = 'REMOVE_PRODUCT_TO_REQUEST',
  removeProductToCartFailure = 'REMOVE_PRODUCT_TO_FAILURE',
  removeProductToCartSuccess = 'REMOVE_PRODUCT_TO_SUCCESS',

  deleteProductCartRequest = 'DELETE_PRODUCT_TO_REQUEST',
  deleteProductCartFailure = 'DELETE_PRODUCT_TO_FAILURE',
  deleteProductCartSuccess = 'DELETE_PRODUCT_TO_SUCCESS'
}

export interface IProduct {
  id: string
  name: string
  price: string
}

export interface ICartItem {
  product: IProduct
  quantity: number
}

export interface ICartState {
  items: ICartItem[]
  failedStockCheck: number[]
}
