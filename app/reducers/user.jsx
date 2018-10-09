import axios from 'axios'

const reducer = (auth = null, action) => {
    switch (action.type) {
    case AUTHENTICATED:
        return action.auth
    }
    return auth
}

const AUTHENTICATED = 'AUTHENTICATED'
export const authenticated = auth => ({
    type: AUTHENTICATED, auth
})

export const login = (username, password) =>
    dispatch =>
        axios.post('/api/auth/login/local',
            { username, password })
            .then(() => dispatch(whoami()))
            .catch(() => dispatch(whoami()))

export const logout = () =>
    dispatch =>
        axios.post('/api/auth/logout')
            .then(() => dispatch(whoami()))
            .catch(() => dispatch(whoami()))

/* signup vs createAUser
sometimes admin can createAUser, be aware of this */

export const signup = (name, email, password) =>
    dispatch =>
        axios.post('/api/users/', { name, email, password })
            .then(() => login(email, password)(dispatch))
            .catch(failed => dispatch(authenticated(null)))

export const whoami = () =>
    dispatch =>
        axios.get('/api/auth/whoami')
            .then(response => {
                const user = response.data
                dispatch(authenticated(user))
            })
            .catch(failed => dispatch(authenticated(null)))

export default reducer
