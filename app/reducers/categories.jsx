import axios from 'axios'

/* -----------------  ACTIONS ------------------ */

const INITIALIZE = 'INITIALIZE_CATEGORIES'
const CREATE = 'CREATE_CATEGORY'
const UPDATE = 'UPDATE_CATEGORY'
const REMOVE = 'REMOVE_CATEGORY'

/* ------------ACTION CREATORS ------------------ */

const init = categories => ({ type: INITIALIZE, categories })
const create = category => ({ type: CREATE, category })
const remove = id => ({ type: REMOVE, id })
const update = category => ({ type: UPDATE, category })

/* ------------ REDUCERS ------------------ */

export default function reducer(categories = [], action) {
    switch (action.type) {
    case INITIALIZE:
        return action.categories
    case CREATE:
        return [action.category, ...categories]
    case REMOVE:
        return categories.filter(category => category.id !== action.id)
    case UPDATE:
        return categories.map(category => (
                action.category.id === category.id ? action.category : category
            ))
    default:
        return categories
    }
}

/* ------------ THUNK CREATORS ------------------ */

export const fetchCategories = () => dispatch => {
    axios.get('/api/categories')
    .then(res => dispatch(init(res.data)))
    .catch(err => console.error('Fetching categories unsuccessful', err))
}

export const fetchCategory = (id) => dispatch => {
    axios.get(`/api/categories/${id}`)
    .then(res => dispatch(update(res.data)))
    .catch(err => console.error('Fetching category unsuccessful', err))
}

// optimistic
export const removeCategory = id => dispatch => {
    dispatch(remove(id))
    axios.delete(`/api/categories/${id}`)
    .catch(err => console.error(`Removing category: ${id} unsuccessful`, err))
}

export const addCategory = category => dispatch => {
    axios.post('/api/categories', category)
    .then(res => dispatch(create(res.data)))
    .catch(err => console.error(`Creating category: ${category} unsuccessful`, err))
}

export const updateCategory = (id, category) => dispatch => {
    axios.put(`/api/categories/${id}`, category)
    .then(res => dispatch(update(res.data)))
    .catch(err => console.error(`Updating category: ${category} unsuccessful`, err))
}
