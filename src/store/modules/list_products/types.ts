export enum ActionTypes {
  listProductsRequest = 'LIST_PRODUCTS_REQUEST',
  listProductsFailure = 'LIST_PRODUCTS_FAILURE',
  listProductsSuccess = 'LIST_PRODUCTS_SUCCESS',

  listProductsUpdate = 'LIST_PRODUCTS_UPDATE'
}

export type IProduct = {
  id: string
  name: string
  price: string
}

export type IListProductsState = {
  items: IProduct[]
  failure: boolean
  loading: boolean
}
