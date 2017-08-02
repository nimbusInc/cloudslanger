import { combineReducers } from 'redux'
import products from './products'
import orders from './orders'
import reviews from './reviews'
import categories from './categories'
import currentcategory from './currentcategory'
import cart from './cart'
import user from './user'
import searchInput from './search'

const rootReducer = combineReducers({
    user,
    products,
    orders,
    reviews,
    categories,
    currentcategory,
    cart,
    searchInput
})

export default rootReducer
