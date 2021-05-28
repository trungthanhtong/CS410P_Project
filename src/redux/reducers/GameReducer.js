/* eslint-disable import/no-anonymous-default-export */
import { SET_MOST_PLAYED_GAMES, SET_MOST_REVIEWED_GAMES } from "../constants/GameConstants"

const initialState = {
    mostPlayedGames: [],
    mostReviewedGames: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_MOST_PLAYED_GAMES: {
            return {...state, mostPlayedGames: [...action.mostPlayedGames]}
        }
        case SET_MOST_REVIEWED_GAMES: {
            return {...state, mostReviewedGames: [...action.mostReviewedGames]}
        }
        default: {
            return {...state}
        }
    }
}
