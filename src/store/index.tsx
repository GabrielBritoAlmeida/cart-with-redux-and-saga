import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { ICartState } from './modules/cart/types'
import { IListProductsState } from './modules/product/list_products/types'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'

export interface IState {
  cart: ICartState
  listProducts: IListProductsState
}

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

sagaMiddleware.run(rootSaga)

export default store
