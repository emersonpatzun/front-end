import { actionTypes } from '../actions/auth.actions';

const INIT_STATE = {
    logged_user: null
}

export default (state = INIT_STATE, action ) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER:
           return {...state};
           case actionTypes.LOGIN_USER_SUCCESS:
               return { ...state, logged_user: action.payload }
        default:
            return {...state};
    }
}
