import { Reducer } from 'redux'
import produce from 'immer'
import { ActionTypes, IUpdateProductsState } from './types'

const INITIAL_STATE: IUpdateProductsState = {
  success: false,
  failure: false,
  loading: false
}

const Cart: Reducer<IUpdateProductsState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.updateProductsRequest: {
        draft.loading = true
        break
      }

      case ActionTypes.updateProductsSuccess: {
        draft.success = true
        draft.loading = false
        break
      }

      case ActionTypes.updateProductsFailure: {
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
