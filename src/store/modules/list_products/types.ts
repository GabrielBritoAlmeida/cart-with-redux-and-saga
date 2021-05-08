export enum ActionTypes {
  listProductsRequest = 'LIST_PRODUCTS_REQUEST',
  listProductsFailure = 'LIST_PRODUCTS_FAILURE',
  listProductsSuccess = 'LIST_PRODUCTS_SUCCESS'
}

export type IProduct = {
  id: number
  name: string
  price: number
}

export type IListProductsState = {
  items: IProduct[]
  failure: boolean
  loading: boolean
}
