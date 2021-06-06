import { takeLatest, call, put } from "@redux-saga/core/effects";
import { SteamService } from "../../services/SteamService";
import { GET_MOST_PLAYED_GAMES, 
         SET_MOST_PLAYED_GAMES,
         GET_MOST_REVIEWED_GAMES,   
         SET_MOST_REVIEWED_GAMES ,
         GET_FUNNIEST_REVIEWS,
         SET_FUNNIEST_REVIEWS,
         GET_MOST_HELPFUL_REVIEWS,
         SET_MOST_HELPFUL_REVIEWS
    } from "../constants/GameConstants";
import {STATUS_CODE} from '../../util/constants/systemSettings'

// Get Most Played Games and Push it to the redux store
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

// Get Most Reviewed Games and Push it to the redux store
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

// Get Funnies Reviews and Push it to the redux store
function * getFunniestReviews(action) {
    try {
        const {data, status} = yield call(() => SteamService.getFunniestReviews(action.limit));
        console.log(status)
        if (status === STATUS_CODE.SUCCESS) {
            yield put ({
                type: SET_FUNNIEST_REVIEWS,
                funniestReviews: data,
            })
        }
    } catch (err) {
        console.error(err);
    }
}

// Get Most Helpful Reviews and Push it to the redux store
function * getMostHelpfulReviews(action) {
    try {
        const {data, status} = yield call(() => SteamService.getMostHelpfulReviews(action.limit));
        console.log(status)
        if (status === STATUS_CODE.SUCCESS) {
            yield put ({
                type: SET_MOST_HELPFUL_REVIEWS,
                mostHelpfulReviews: data,
            })
        }
    } catch (err) {
        console.error(err);
    }
}

export function * watchingGetMostPlayedGames() {
    yield takeLatest(GET_MOST_PLAYED_GAMES, getMostPlayedGames);
}

export function * watchingGetMostReviewedGames() {
    yield takeLatest(GET_MOST_REVIEWED_GAMES, getMostReviewedGames);
}

export function * watchingGetFunniestReviews() {
    yield takeLatest(GET_FUNNIEST_REVIEWS, getFunniestReviews);
}

export function * watchingGetMostHelpfulReviews() {
    yield takeLatest(GET_MOST_HELPFUL_REVIEWS, getMostHelpfulReviews);
}