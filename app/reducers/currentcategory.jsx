/* ----------------- ACTIONS ------------------ */
const SELECT = 'SELECT_CATEGORY'

/* ----------- ACTION CREATORS------------------ */
export const select = newcategory => ({ type: SELECT, newcategory })

/* ----------- REDUCERS ------------------ */

// SJB/OB: stick with camelCasing
// Unselect - probably good to make an action creator for this
export default function reducer(currentCategory = {}, action) {
    switch (action.type) {
    case SELECT:
        return action.newcategory
    default:
        return currentCategory
    }
}
