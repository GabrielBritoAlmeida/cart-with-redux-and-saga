export enum ActionTypes {
  listProductsRequest = 'LIST_PRODUCTS_REQUEST',
  listProductsFailure = 'LIST_PRODUCTS_FAILURE',
  listProductsSuccess = 'LIST_PRODUCTS_SUCCESS'
}

export interface IProduct {
  id: number
  name: string
  price: number
}

export interface IListProductsState {
  items: IProduct[]
  failure: boolean
  loading: boolean
}
