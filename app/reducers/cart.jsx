import axios from 'axios'

/* -----------------    ACTIONS     ------------------ */

const UPDATE_CART = 'UPDATE_CART'
const REMOVE_ITEM = 'REMOVE_ITEM'
const FETCH_CART = 'FETCH_CART'
const EMPTY_CART = 'EMPTY_CART'

/* ------------   ACTION CREATORS     ------------------ */

const update = newCart => ({ type: UPDATE_CART, newCart })
const remove = newCart => ({ type: REMOVE_ITEM, newCart })
const fetched = newCart => ({ type: FETCH_CART, newCart })
export const emptyCart = () => ({ type: EMPTY_CART })

/* ------------       REDUCERS     ------------------ */

export default function reducer(cart = {}, action) {
    switch (action.type) {
    case FETCH_CART:
    case UPDATE_CART:
    case REMOVE_ITEM:
        return action.newCart
    case EMPTY_CART:
        return {}
    }
    return cart
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchCart = () => dispatch => {
    axios.get(`/api/cart/`)
    .then(res => dispatch(fetched(res.data)))
    .catch(err => console.error('Fetching cart unsuccessful', err))
}

// pessimistic
export const deleteFromCart = item => dispatch => axios.delete(`/api/cart`, { data: item })
           .then(res => { dispatch(remove(res.data)) })
           .catch(err => console.error(`Removing ${item} unsuccessful`, err))

export const updateCart = (item, action) => dispatch => axios.put('/api/cart', Object.assign({}, item, { action }))
           .then(res => dispatch(update(res.data)))
           .catch(err => console.error(`Adding ${item}: unsuccessful`, err))
