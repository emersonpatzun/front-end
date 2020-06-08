import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import reducers from './reducers/reducers';
import sagas from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export const history = createBrowserHistory();

export function configureStore(initialState){

    const store = createStore(
        reducers(history),
        initialState,
        compose(
            applyMiddleware(
                routerMiddleware(history),
                ...middlewares
            )
        )
    );

    sagaMiddleware.run(sagas);

    if(module.hot) {
        module.hot.accept('./reducers/reducers', () => {
            const nextRootReducer = require('./reducers/reducers');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;

}
  












// import {createStore, applyMiddleware, compose } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import { createBrowserHistory } from 'history';
// import {routerMiddleware} from 'connected-react-router';
// import reducers from './reducers/reducers';

// const sagaMiddleware = createSagaMiddleware();
// const middlewares = [sagaMiddleware];

// export const history = createBrowserHistory();

// export function configureStore(initialState){

//     const store = createStore(
//         reducers(history),
//         initialState,
//         compose(
//             applyMiddleware(
//                 routerMiddleware(history),
//                 ...middlewares
//             )
//         )
//     );

//     return store;

// }
