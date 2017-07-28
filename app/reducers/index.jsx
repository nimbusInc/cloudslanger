import { combineReducers } from 'redux'
import products from './products'
import orders from './orders'
import reviews from './reviews'

const rootReducer = combineReducers({
    user: require('./user').default,
    products,
    orders,
    reviews
})

export default rootReducer
