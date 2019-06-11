import catalogs from '../apis/catalogs';
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_CATALOG,
    FETCH_CATALOG,
    FETCH_CATALOGS,
    FETCH_PAGE_COUNT,
    DELETE_CATALOG,
    EDIT_CATALOG,
    SET_OFFSET, SET_PAGE_SIZE, ADD_SORTING_CRITERIA_SORT_BY, ADD_SORTING_CRITERIA_SORT_TYPE, SEARCH_KEYWORD
} from "./types";
import history from '../history';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const createCatalog = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const createdBy = userId;
    const response = await catalogs.post('/catalogs', { ...formValues, createdBy });
    dispatch({ type: CREATE_CATALOG, payload: response.data });
    history.push('/');
};

export const editCatalog = (id, formValues) => async dispatch => {
    const response = await catalogs.put(`/catalogs/${id}`, formValues);
    dispatch({ type: EDIT_CATALOG, payload: response.data });
    history.push('/');
};

export const fetchCatalogs = (offset, pageSize, sortBy, ascOrDesc, search) => async dispatch => {
    let url = `/catalogs?page=${offset}&size=${pageSize}&sort=${sortBy},${ascOrDesc}`;
    if(search){
        url = `/catalogs?page=${offset}&size=${pageSize}&sort=${sortBy},${ascOrDesc}&search=title:${search}`;
    }
    const response = await catalogs.get(url);
    dispatch({ type: FETCH_PAGE_COUNT, payload: response.data.totalPages });
    dispatch({ type: FETCH_CATALOGS, payload: response.data.content });
};

export const fetchCatalog = id => async dispatch => {
    const response = await catalogs.get(`/catalogs/${id}`);
    dispatch({ type: FETCH_CATALOG, payload: response.data });
};

export const deleteCatalog = id => async dispatch => {
    await catalogs.delete(`/catalogs/${id}`);
    dispatch({ type: DELETE_CATALOG, payload: id });
    history.push('/');
};

export const setOffset = offset => async dispatch => {
    dispatch({ type: SET_OFFSET, payload: offset });
};

export const setPageSize = pageSize => async dispatch => {
    dispatch({ type: SET_PAGE_SIZE, payload: pageSize });
};

export const addSortingCriteriaSortBy = (sortBy) => async dispatch => {
    dispatch({ type: ADD_SORTING_CRITERIA_SORT_BY, payload: sortBy });
};

export const addSortingCriteriaSortType = (ascOrDesc) => async dispatch => {
    dispatch({ type: ADD_SORTING_CRITERIA_SORT_TYPE, payload: ascOrDesc });
};

export const setSearchKeyword = (search) => async dispatch => {
    dispatch({ type: SEARCH_KEYWORD, payload: search });
};





export const fetchStudent = () => {

}
export const fetchStudents = () => {

}
export const editStudent = () => {

}



export const fetchCopy = () => {

}

export const fetchCopies = () => {

}



export const fetchCourse = () => {

}
export const fetchCourses = () => {

}

