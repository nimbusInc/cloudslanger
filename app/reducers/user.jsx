import axios from 'axios'

const reducer = (user = { info: {}, cart: {} }, action) => {
    const updatedUser = Object.assign({}, user)
    const cart = updatedUser.cart
    switch (action.type) {
    case AUTHENTICATED:
        updatedUser.info = action.info
        return updatedUser

    case ADD_TO_CART:
        cart[action.item.id]
        ? cart[action.item.id] += action.item.quantity
        : cart[action.item.id] = action.item.quantity
        return updatedUser

    case REMOVE_FROM_CART:
        cart[action.item.id] = null
        return updatedUser

    case UPDATE_CART:
        cart[action.item.id] = action.item.newQuantity
        return updatedUser
    }

    return updatedUser
}

const ADD_TO_CART = 'ADD_TO_CART'
export const addToCart = item => ({
    type: ADD_TO_CART, item
})

const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const removeFromCart = item => ({
    type: REMOVE_FROM_CART, item
})

const UPDATE_CART = 'UPDATE_CART'
export const updateItem = item => ({
    type: UPDATE_CART, item
})

const CHECKOUT = 'CHECKOUT_CART'

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
