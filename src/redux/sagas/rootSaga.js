import {all} from 'redux-saga/effects';
import * as GameSaga from './GameSaga'

export function * rootSaga() {
    yield all([
        GameSaga.watchingGetMostPlayedGames(),
        GameSaga.watchingGetMostReviewedGames(),
    ])
}
