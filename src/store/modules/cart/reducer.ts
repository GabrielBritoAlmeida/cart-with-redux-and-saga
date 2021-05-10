import { Reducer } from 'redux'
import produce from 'immer'
import { ActionTypes, ICartState } from './types'

const INITIAL_STATE: ICartState = {
  items: [],
  failedStockCheck: []
}

const Cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.addProductToCartSuccess: {
        const { product } = action.payload

        const productInCartIndex = draft.items.findIndex(
          (item) => item.product.id === product.id
        )

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++
        } else {
          draft.items.push({
            product,
            quantity: 1
          })
        }

        break
      }

      case ActionTypes.addProductToCartFailure: {
        const { productId } = action.payload
        draft.failedStockCheck.push(productId)
        break
      }

      case ActionTypes.removeProductToCartSuccess: {
        const { product } = action.payload

        const productInCartIndex = draft.items.findIndex(
          (item) => item.product.id === product.id
        )

        if (productInCartIndex >= 0) {
          if (draft.items[productInCartIndex].quantity > 1) {
            draft.items[productInCartIndex].quantity--
          } else {
            draft.items.splice(productInCartIndex, 1)
          }
        }
        break
      }

      case ActionTypes.removeProductToCartFailure: {
        const { productId } = action.payload
        draft.failedStockCheck.push(productId)
        break
      }

      case ActionTypes.deleteProductCartSuccess: {
        const { id } = action.payload

        const productDeleteInCartIndex = draft.items.filter(
          (item) => item.product.id !== id
        )
        draft.items = productDeleteInCartIndex
        break
      }

      case ActionTypes.updateProductCartSuccess: {
        const { product } = action.payload

        const productInCartIndex = draft.items.findIndex(
          (item) => item.product.id === product.id
        )

        if (draft.items[productInCartIndex]) {
          draft.items[productInCartIndex].product.name = product.name
          draft.items[productInCartIndex].product.price = product.price
        }

        break
      }

      default: {
        return state
      }
    }
  })
}

export default Cart
