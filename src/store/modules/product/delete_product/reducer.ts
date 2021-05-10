import { Reducer } from 'redux'
import produce from 'immer'
import { ActionTypes, IDeleteProductsState } from './types'

const INITIAL_STATE: IDeleteProductsState = {
  success: false,
  failure: false,
  loading: false
}

const Cart: Reducer<IDeleteProductsState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.deleteProductsRequest: {
        draft.loading = true
        break
      }

      case ActionTypes.deleteProductsSuccess: {
        draft.success = true
        draft.loading = false
        break
      }

      case ActionTypes.deleteProductsFailure: {
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
