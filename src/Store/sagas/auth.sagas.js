import { all, call, fork, takeEvery, put } from 'redux-saga/effects';
import { actionTypes } from '../actions/auth.actions';
import { $http } from '../http/http';
import { loginUserSuccess } from '../actions/auth.actions';
import {history} from '../store';

const loginUserAsync =  async (email, password) => {
    const result = await $http.post('/login', {email, password});
    return result;
}

function* loginUser({payload}) {
    const {email, password} = payload;
    console.log('loginUser');
    try {
        const result = yield call(loginUserAsync, email, password);
        if(result.data) {
            console.log(result.data);
            $http.defaults.headers.common['X-Auth-Token'] = result.data.access_token;
             yield put(loginUserSuccess(result.data));
             history.pushState('/productos');
        } else {
            //validar informacion vacia 
        }

    } catch(error) {
        console.log(error);
}

}

export  function* watchLoginUser() {
    yield takeEvery(actionTypes.LOGIN_USER, loginUser);
}

export default function* rootSaga() {
    yield all([
        fork(watchLoginUser)
    ])
}
