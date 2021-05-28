import MostPlayedGame from "../../components/SteamStats/MostPlayedGame";
import { SET_STAT_COMPONENT } from "../constants/StatConstants";

/* eslint-disable import/no-anonymous-default-export */
const initialState = {
    Component: <MostPlayedGame/>,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_STAT_COMPONENT: {
            return { ...state, Component: action.Component };
        }

        default:
            return { ...state };
    }
};
