import { GET_MOST_PLAYED_GAMES, GET_MOST_REVIEWED_GAMES } from "../constants/GameConstants";
import { SET_STAT_COMPONENT } from "../constants/StatConstants";

export const setStatComponent = (Component) => ({
    type: SET_STAT_COMPONENT,
    Component,
})

export const getMostPlayedGames = (limit) => ({
    type: GET_MOST_PLAYED_GAMES,
    limit
})

export const getMostReviewedGames = (limit) => ({
    type: GET_MOST_REVIEWED_GAMES,
    limit
})


