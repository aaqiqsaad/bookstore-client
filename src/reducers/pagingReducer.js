import {
    SET_CATALOG_OFFSET,
    FETCH_CATALOG_PAGE_COUNT,
    SET_CATALOG_PAGE_SIZE,
    ADD_CATALOG_SORTING_CRITERIA_SORT_BY,
    ADD_CATALOG_SORTING_CRITERIA_SORT_TYPE,
    CATALOG_SEARCH_KEYWORD,
    FETCH_COURSE_PAGE_COUNT,
    SET_COURSE_OFFSET,
    SET_COURSE_PAGE_SIZE,
    ADD_COURSE_SORTING_CRITERIA_SORT_BY,
    ADD_COURSE_SORTING_CRITERIA_SORT_TYPE,
    COURSE_SEARCH_KEYWORD,
    FETCH_PATRON_PAGE_COUNT,
    SET_PATRON_OFFSET,
    SET_PATRON_PAGE_SIZE,
    ADD_PATRON_SORTING_CRITERIA_SORT_BY,
    ADD_PATRON_SORTING_CRITERIA_SORT_TYPE,
    PATRON_SEARCH_KEYWORD
} from "../actions/types";

const INITIAL_STATE = {
    catalogTotalPages: 0,
    catalogOffset: 0,
    catalogPageSize: 10,
    catalogSortBy: 'title',
    catalogAscOrDesc: 'asc',
    catalogSearch: "",
    courseTotalPages: 0,
    courseOffset: 0,
    coursePageSize: 10,
    courseSortBy: 'crsCde',
    courseAscOrDesc: 'asc',
    courseSearch: "",
    patronTotalPages: 0,
    patronOffset: 0,
    patronPageSize: 10,
    patronSortBy: 'idNum',
    patronAscOrDesc: 'asc',
    patronSearch: ""
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_CATALOG_PAGE_COUNT:
            return {...state, catalogTotalPages: action.payload};
        case SET_CATALOG_OFFSET:
            return {...state, catalogOffset: action.payload};
        case SET_CATALOG_PAGE_SIZE:
            return {...state, catalogPageSize: action.payload};
        case ADD_CATALOG_SORTING_CRITERIA_SORT_BY:
            return {...state, catalogSortBy: action.payload};
        case ADD_CATALOG_SORTING_CRITERIA_SORT_TYPE:
            return {...state, catalogAscOrDesc: action.payload};
        case CATALOG_SEARCH_KEYWORD:
            return {...state, catalogSearch: action.payload};
        case FETCH_COURSE_PAGE_COUNT:
            return {...state, courseTotalPages: action.payload};
        case SET_COURSE_OFFSET:
            return {...state, courseOffset: action.payload};
        case SET_COURSE_PAGE_SIZE:
            return {...state, coursePageSize: action.payload};
        case ADD_COURSE_SORTING_CRITERIA_SORT_BY:
            return {...state, courseSortBy: action.payload};
        case ADD_COURSE_SORTING_CRITERIA_SORT_TYPE:
            return {...state, courseAscOrDesc: action.payload};
        case COURSE_SEARCH_KEYWORD:
            return {...state, courseSearch: action.payload};
        case FETCH_PATRON_PAGE_COUNT:
            return {...state, patronTotalPages: action.payload};
        case SET_PATRON_OFFSET:
            return {...state, patronOffset: action.payload};
        case SET_PATRON_PAGE_SIZE:
            return {...state, patronPageSize: action.payload};
        case ADD_PATRON_SORTING_CRITERIA_SORT_BY:
            return {...state, patronSortBy: action.payload};
        case ADD_PATRON_SORTING_CRITERIA_SORT_TYPE:
            return {...state, patronAscOrDesc: action.payload};
        case PATRON_SEARCH_KEYWORD:
            return {...state, patronSearch: action.payload};
        default:
            return state;
    }
};