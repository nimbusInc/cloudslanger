import { combineReducers } from 'redux'
import products from './products'
import orders from './orders'
import reviews from './reviews'
import categories from './categories'
import currentcategory from './currentcategory'
import cart from './cart'

// no reason for require ... default ??? BONES can be STRANGE
const rootReducer = combineReducers({
    user: require('./user').default,
    products,
    orders,
    reviews,
    categories,
    currentcategory,
    cart
})

export default rootReducer
