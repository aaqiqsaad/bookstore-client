import _ from 'lodash';
import {
    FETCH_CATALOG,
    FETCH_CATALOGS,
    EDIT_CATALOG,
    DELETE_CATALOG,
    CREATE_CATALOG
} from "../actions/types";


export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_CATALOG:
            return { ...state, [action.payload.id]: action.payload };
        case FETCH_CATALOGS:
            return { ...{}, ..._.mapKeys(action.payload, 'id')};
        case EDIT_CATALOG:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_CATALOG:
            return _.omit(state, action.payload);
        case CREATE_CATALOG:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
};