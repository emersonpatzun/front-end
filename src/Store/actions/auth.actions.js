export const actionTypes = {
    LOGIN_USER: 'LOGIN_USER',
    LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
    LOGIN_USER_FAIL: 'LOGIN_USER_FAIL'
}

export const loginUser = (email, password) => ({
    type: actionTypes.LOGIN_USER,
    payload: {email, password}
})

export const loginUserSuccess = (user) => ({
    type: actionTypes.LOGIN_USER_SUCCESS,
    payload: user
}) 