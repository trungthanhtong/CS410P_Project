import { applyMiddleware, combineReducers, createStore } from 'redux';
import createMiddlewareSaga from 'redux-saga';
import { rootSaga } from '../sagas/rootSaga';
import GameReducer from './GameReducer'
import StatReducer from './StatReducer';

const middlewareSaga = createMiddlewareSaga();

const rootReducer = combineReducers({
    GameReducer,
    StatReducer,
})

const store = createStore(rootReducer, applyMiddleware(middlewareSaga));

middlewareSaga.run(rootSaga);

export default store;
