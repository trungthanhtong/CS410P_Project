/* eslint-disable import/no-anonymous-default-export */
import { SET_MOST_PLAYED_GAMES, 
         SET_MOST_REVIEWED_GAMES,
         SET_FUNNIEST_REVIEWS,
         SET_MOST_HELPFUL_REVIEWS } from "../constants/GameConstants"

const initialState = {
    mostPlayedGames: [],
    mostReviewedGames: [],
    funniestReviews: [],
    mostHelpfulReviews: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_MOST_PLAYED_GAMES: {
            return {...state, mostPlayedGames: [...action.mostPlayedGames]}
        }
        case SET_MOST_REVIEWED_GAMES: {
            return {...state, mostReviewedGames: [...action.mostReviewedGames]}
        }
        case SET_FUNNIEST_REVIEWS: {
            return {...state, funniestReviews: [...action.funniestReviews]}
        }
        case SET_MOST_HELPFUL_REVIEWS: {
            return {...state, mostHelpfulReviews: [...action.mostHelpfulReviews]}
        }
        default: {
            return {...state}
        }
    }
}
