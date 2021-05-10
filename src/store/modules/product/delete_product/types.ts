export enum ActionTypes {
  deleteProductsRequest = 'DELETE_PRODUCTS_REQUEST',
  deleteProductsFailure = 'DELETE_PRODUCTS_FAILURE',
  deleteProductsSuccess = 'DELETE_PRODUCTS_SUCCESS'
}

export type IDeleteProduct = {
  id: string
}

export type IDeleteProductsState = {
  success: boolean
  failure: boolean
  loading: boolean
}
