import { Reducer } from 'redux'
import produce from 'immer'
import { ActionTypes, IListProductsState } from './types'

const INITIAL_STATE: IListProductsState = {
  items: [],
  failure: false,
  loading: false
}

const Cart: Reducer<IListProductsState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.listProductsRequest: {
        draft.loading = true
        break
      }

      case ActionTypes.listProductsSuccess: {
        draft.items.push(action.payload)
        draft.loading = false
        break
      }

      case ActionTypes.listProductsFailure: {
        draft.failure = true
        draft.loading = false
        break
      }

      default: {
        return state
      }
    }
  })
}

export default Cart
