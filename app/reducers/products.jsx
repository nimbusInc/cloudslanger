import axios from 'axios'

/* -----------------    ACTIONS     ------------------ */

const INITIALIZE = 'INITIALIZE_PRODUCTS'
const CREATE = 'CREATE_PRODUCT'
const UPDATE = 'UPDATE_PRODUCT'
const REMOVE = 'REMOVE_PRODUCT'

/* ------------   ACTION CREATORS     ------------------ */

const init = products => ({ type: INITIALIZE, products })
const create = product => ({ type: CREATE, product })
const remove = id => ({ type: REMOVE, id })
const update = product => ({ type: UPDATE, product })

/* ------------       REDUCERS     ------------------ */

export default function reducer(products = [], action) {
    switch (action.type) {
    case INITIALIZE:
        return action.products

    case CREATE:
        return [action.product, ...products]

    case REMOVE:
        return products.filter(product => product.id !== action.id)

    case UPDATE:
        return products.map(product => (
            action.product.id === product.id ? action.product : product
        ))

    default:
        return products
    }
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchProducts = () => dispatch => {
    axios.get('/api/products')
        .then(res => dispatch(init(res.data)))
        .catch(err => console.error('Fetching products unsuccessful', err))
}

export const fetchProduct = (id) => dispatch => {
    axios.get(`/api/products/${id}`)
        .then(res => dispatch(update(res.data)))
        .catch(err => console.error('Fetching product unsuccessful', err))
}

// optimistic
export const removeProduct = id => dispatch => {
    dispatch(remove(id))
    axios.delete(`/api/products/${id}`)
        .catch(err => console.error(`Removing product: ${id} unsuccessful`, err))
}

export const addProduct = product => dispatch => {
    axios.post('/api/products', product)
        .then(res => dispatch(create(res.data)))
        .catch(err => console.error(`Creating product: ${product} unsuccessful`, err))
}

export const updateProduct = (id, product) => dispatch => {
    axios.put(`/api/products/${id}`, product)
        .then(res => dispatch(update(res.data)))
        .catch(err => console.error(`Updating product: ${product} unsuccessful`, err))
}
