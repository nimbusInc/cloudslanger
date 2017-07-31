/* ----------------- ACTIONS ------------------ */
const SELECT = 'SELECT_CATEGORY'

/* ----------- ACTION CREATORS------------------ */
export const select = currentCategory => ({
    type: SELECT,
    currentCategory })

/* ----------- REDUCERS ------------------ */

export default function reducer(currentCategory = {}, action) {
    switch (action.type) {
    case SELECT:
        return action.currentCategory
    default:
        return currentCategory
    }
}
