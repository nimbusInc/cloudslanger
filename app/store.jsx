import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import { whoami } from './reducers/user'
import { fetchCart } from './reducers/cart'
import { fetchOrders } from './reducers/orders'

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware,
      createLogger({ collapsed: true })
    )
  )
)

export default store

// Set the auth info at start
store.dispatch(whoami())
store.dispatch(fetchCart())
store.dispatch(fetchOrders())

