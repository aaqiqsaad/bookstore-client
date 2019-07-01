import _ from 'lodash';
import {
    FETCH_PATRON,
    FETCH_PATRONS,
    EDIT_PATRON
} from "../actions/types";


export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_PATRON:
            return { ...state, [action.payload.id]: action.payload };
        case FETCH_PATRONS:
            return { ...{}, ..._.mapKeys(action.payload, 'idNum')};
        case EDIT_PATRON:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
};