import { combineReducers } from 'redux'
import products from './products'
import orders from './orders'
import reviews from './reviews'
import categories from './categories'
import currentcategory from './currentcategory'

const rootReducer = combineReducers({
    auth: require('./auth').default,
    products,
    orders,
    reviews,
    categories,
    currentcategory
})

export default rootReducer
