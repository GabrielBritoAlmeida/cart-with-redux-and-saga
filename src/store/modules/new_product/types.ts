export enum ActionTypes {
  newProductsRequest = 'NEW_PRODUCTS_REQUEST',
  newProductsFailure = 'NEW_PRODUCTS_FAILURE',
  newProductsSuccess = 'NEW_PRODUCTS_SUCCESS'
}

export type INewProduct = {
  name: string
  price: string
}

export type INewProductsState = {
  item: INewProduct | null
  failure: boolean
  loading: boolean
}
