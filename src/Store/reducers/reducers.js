import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './auth.reducers';

const reducers  = (history) => combineReducers({
    router: connectRouter(history),
    auth
});

export default reducers;
