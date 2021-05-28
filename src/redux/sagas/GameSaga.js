import { takeLatest, call, put } from "@redux-saga/core/effects";
import { SteamService } from "../../services/SteamService";
import { GET_MOST_PLAYED_GAMES, GET_MOST_REVIEWED_GAMES, SET_MOST_PLAYED_GAMES, SET_MOST_REVIEWED_GAMES } from "../constants/GameConstants";
import {STATUS_CODE} from '../../util/constants/systemSettings'

function * getMostPlayedGames(action) {
    try {
        const {data, status} = yield call(() => SteamService.getMostPlayedGames(action.limit));
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: SET_MOST_PLAYED_GAMES,
                mostPlayedGames: data,
            })
        }
    } catch (err) {
        console.log(err);
    }
}

function * getMostReviewedGames(action) {
    try {
        const {data, status} = yield call(() => SteamService.getMostReviewedGames(action.limit));
        console.log(status)
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: SET_MOST_REVIEWED_GAMES,
                mostReviewedGames: data,
            })
        }
    } catch (err) {
        console.log(err);
    }
}

export function * watchingGetMostPlayedGames() {
    yield takeLatest(GET_MOST_PLAYED_GAMES, getMostPlayedGames);
}

export function * watchingGetMostReviewedGames() {
    yield takeLatest(GET_MOST_REVIEWED_GAMES, getMostReviewedGames);
}