import _ from 'lodash';
import {
    FETCH_COURSE,
    FETCH_COURSES
} from "../actions/types";


export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_COURSE:
            return { ...state, [action.payload.id]: action.payload };
        case FETCH_COURSES:
            return { ...{}, ..._.mapKeys(action.payload, 'id')};
        default:
            return state;
    }
};