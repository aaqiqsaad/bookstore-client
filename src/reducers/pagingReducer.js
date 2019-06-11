import {
    SET_OFFSET,
    FETCH_PAGE_COUNT,
    SET_PAGE_SIZE,
    ADD_SORTING_CRITERIA_SORT_BY,
    ADD_SORTING_CRITERIA_SORT_TYPE,
    SEARCH_KEYWORD
} from "../actions/types";

const INITIAL_STATE = {
    totalPages: 0,
    offset: 0,
    pageSize: 10,
    sortBy: 'title',
    ascOrDesc: 'asc',
    search: ""
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_PAGE_COUNT:
            return {...state, totalPages: action.payload};
        case SET_OFFSET:
            return {...state, offset: action.payload};
        case SET_PAGE_SIZE:
            return {...state, pageSize: action.payload};
        case ADD_SORTING_CRITERIA_SORT_BY:
            return {...state, sortBy: action.payload};
        case ADD_SORTING_CRITERIA_SORT_TYPE:
            return {...state, ascOrDesc: action.payload};
        case SEARCH_KEYWORD:
            return {...state, search: action.payload};
        default:
            return state;
    }
};