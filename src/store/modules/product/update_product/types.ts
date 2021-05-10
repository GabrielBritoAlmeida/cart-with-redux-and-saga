export enum ActionTypes {
  updateProductsRequest = 'UPDATE_PRODUCTS_REQUEST',
  updateProductsFailure = 'UPDATE_PRODUCTS_FAILURE',
  updateProductsSuccess = 'UPDATE_PRODUCTS_SUCCESS'
}

export type IUpdateProduct = {
  id: string
  name: string
  price: string
}

export type IUpdateProductsState = {
  success: boolean
  failure: boolean
  loading: boolean
}
