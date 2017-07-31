import { combineReducers } from 'redux'
import products from './products'
import orders from './orders'
import reviews from './reviews'
import cart from './cart'

const rootReducer = combineReducers({
    user: require('./user').default,
    products,
    orders,
    reviews,
    cart
})

export default rootReducer
