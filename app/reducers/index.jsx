import { combineReducers } from 'redux'
import products from './products'
import orders from './orders'
import reviews from './reviews'

const rootReducer = combineReducers({
    auth: require('./auth').default,
    products,
    orders,
    reviews
})

export default rootReducer
