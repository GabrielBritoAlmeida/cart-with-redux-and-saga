export enum ActionTypes {
  addProductToCartRequest = 'ADD_PRODUCT_TO_REQUEST',
  addProductToCartFailure = 'ADD_PRODUCT_TO_FAILURE',
  addProductToCartSuccess = 'ADD_PRODUCT_TO_SUCCESS',

  deleteProductCartRequest = 'DELETE_PRODUCT_TO_REQUEST',
  deleteProductCartFailure = 'DELETE_PRODUCT_TO_FAILURE',
  deleteProductCartSuccess = 'DELETE_PRODUCT_TO_SUCCESS'
}

export interface IProduct {
  id: number
  name: string
  price: number
}

export interface ICartItem {
  product: IProduct
  quantity: number
}

export interface ICartState {
  items: ICartItem[]
  failedStockCheck: number[]
}
