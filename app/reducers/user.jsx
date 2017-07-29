import axios from 'axios'

const reducer = (state = { info: {}, cart: {} }, action) => {
    const newState = Object.assign({}, state)
    const cart = newState.cart
    const item = action.item
    switch (action.type) {
    case AUTHENTICATED:
        newState.info = action.info
        return newState

    case ADD_TO_CART:
        cart[item.id]
        ? cart[item.id] += item.quantity
        : cart[item.id] = item.quantity
        return newState

    case REMOVE_FROM_CART:
        cart[action.item.id] = null
        return newState

    case UPDATE_ITEM:
        cart[action.item.id] = action.item.newQuantity
        return newState
    }

    return newState
}

const ADD_TO_CART = 'atc'
export const addToCart = item => ({
    type: ADD_TO_CART, action: item
})

const REMOVE_FROM_CART = 'rfc'
export const removeFromCart = item => ({
    type: REMOVE_FROM_CART, action: item
})

const UPDATE_ITEM = 'ui'
export const updateItem = item => ({
    type: UPDATE_ITEM, action: item
})

const CHECKOUT = 'co'

const AUTHENTICATED = 'AUTHENTICATED'
export const authenticated = info => ({
    type: AUTHENTICATED, info
})

export const login = (username, password) =>
  dispatch =>
    axios.post('/api/auth/login/local',
      { username, password })
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => {
          const user = response.data
          dispatch(authenticated(user))
      })
      .catch(failed => dispatch(authenticated(null)))

export default reducer
