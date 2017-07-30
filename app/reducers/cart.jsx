import axios from 'axios'

/* -----------------    ACTIONS     ------------------ */

const RETRIEVE = 'RETRIEVE_CART'
const ADD_ITEM = 'ADD_ITEM'
const UPDATE = 'UPDATE_CART'
const REMOVE_ITEM = 'REMOVE_ITEM'

/* ------------   ACTION CREATORS     ------------------ */

const init = carts => ({ type: RETRIEVE, carts })
const add = item => ({ type: ADD_ITEM, item })
const remove = id => ({ type: REMOVE_ITEM, id })
const update = cart => ({ type: UPDATE, cart })

/* ------------       REDUCERS     ------------------ */

export default function reducer(cart = {}, action) {
    const newCart = Object.assign({}, cart)
    switch (action.type) {
    case UPDATE:
        return action.cart
    case ADD_ITEM:
        const [id] = Object.keys(action.item)
        const quantity = action.item[id]
        newCart[id] = quantity
        break
    }
    return newCart
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchCart = () => dispatch => {
    axios.get(`/api/cart/`)
        .then(res => dispatch(update(res.data)))
        .catch(err => console.error('Fetching cart unsuccessful', err))
}

// optimistic
export const removeItem = id => dispatch => {
    dispatch(remove(id))
    axios.delete(`/api/carts/${id}`)
        .catch(err => console.error(`Removing cart: ${id} unsuccessful`, err))
}

export const addToCart = (item) => dispatch => {
    axios.put('/api/cart', item)
        .then(res => dispatch(add(res.data)))
        .catch(err => console.error(`Adding to cart cart: unsuccessful`, err))
}

export const updateCart = (id, cart) => dispatch => {
    axios.put(`/api/carts/${id}`, cart)
        .then(res => dispatch(update(res.data)))
        .catch(err => console.error(`Updating cart: ${cart} unsuccessful`, err))
}
