import {ADD_DICTY, LOAD_DICTYS} from "../actions/ActionTypes";
import { Dicty } from "../../utils/interfaces";
import { IDictyAction } from "../actions/Dicty";

const initialState: Dicty[] = [];

function dictysReducer(state: Dicty[] = initialState, action: IDictyAction) {
    let newState = [...state];

    switch (action.type) {
        case ADD_DICTY:
            newState.push(action.dicty);
            break;
        case LOAD_DICTYS:
            newState = action.dictys;
            break;
    }

    return newState;
}

export default dictysReducer;
