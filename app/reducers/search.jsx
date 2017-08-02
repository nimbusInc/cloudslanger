/* -----------------    ACTIONS     ------------------ */
const UPDATESEARCH = 'UPDATE_SEARCH'

/* ------------   ACTION CREATORS     ------------------ */
export const updateSearch = searchInput => ({ type: UPDATESEARCH, searchInput })

/* ------------       REDUCERS     ------------------ */
export default function reducer(searchInput = '', action) {
    switch (action.type) {
    case UPDATESEARCH:
        return action.searchInput

    default:
        return searchInput
    }
}
