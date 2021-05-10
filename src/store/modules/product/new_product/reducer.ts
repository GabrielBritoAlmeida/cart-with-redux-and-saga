import { Reducer } from 'redux'
import produce from 'immer'
import { ActionTypes, INewProductsState } from './types'

const INITIAL_STATE: INewProductsState = {
  success: false,
  failure: false,
  loading: false
}

const Cart: Reducer<INewProductsState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.newProductsRequest: {
        draft.loading = true
        break
      }

      case ActionTypes.newProductsSuccess: {
        draft.success = true
        draft.loading = false
        break
      }

      case ActionTypes.newProductsFailure: {
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
