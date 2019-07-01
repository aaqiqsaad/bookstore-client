import catalogs from '../apis/catalogs';
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_CATALOG,
    FETCH_CATALOG,
    FETCH_CATALOGS,
    ADD_COURSE_TO_CATALOG,
    REMOVE_COURSE_FROM_CATALOG,
    FETCH_CATALOG_PAGE_COUNT,
    DELETE_CATALOG,
    EDIT_CATALOG,
    SET_CATALOG_OFFSET,
    SET_CATALOG_PAGE_SIZE,
    ADD_CATALOG_SORTING_CRITERIA_SORT_BY,
    ADD_CATALOG_SORTING_CRITERIA_SORT_TYPE,
    CATALOG_SEARCH_KEYWORD,
    FETCH_COURSE,
    FETCH_COURSES,
    FETCH_COURSE_PAGE_COUNT,
    SET_COURSE_OFFSET,
    SET_COURSE_PAGE_SIZE,
    ADD_COURSE_SORTING_CRITERIA_SORT_BY,
    ADD_COURSE_SORTING_CRITERIA_SORT_TYPE,
    COURSE_SEARCH_KEYWORD,
    FETCH_PATRON,
    FETCH_PATRONS,
    FETCH_PATRON_PAGE_COUNT,
    EDIT_PATRON,
    SET_PATRON_OFFSET,
    SET_PATRON_PAGE_SIZE,
    ADD_PATRON_SORTING_CRITERIA_SORT_BY,
    ADD_PATRON_SORTING_CRITERIA_SORT_TYPE,
    PATRON_SEARCH_KEYWORD,
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
    history.push('/catalogs');
};

export const editCatalog = (id, formValues) => async dispatch => {
    const response = await catalogs.put(`/catalogs/${id}`, formValues);
    dispatch({ type: EDIT_CATALOG, payload: response.data });
    history.push(`/catalogs/${id}`);
};

export const fetchCatalogs = (catalogOffset, catalogPageSize, catalogSortBy, catalogAscOrDesc, catalogSearch) => async dispatch => {
    let url = `/catalogs?page=${catalogOffset}&size=${catalogPageSize}&sort=${catalogSortBy},${catalogAscOrDesc}`;
    if(catalogSearch){
        url = `/catalogs?page=${catalogOffset}&size=${catalogPageSize}&sort=${catalogSortBy},${catalogAscOrDesc}&search=title:${catalogSearch}`;
    }
    const response = await catalogs.get(url);
    dispatch({ type: FETCH_CATALOG_PAGE_COUNT, payload: response.data.totalPages });
    dispatch({ type: FETCH_CATALOGS, payload: response.data.content });
};

export const fetchCatalog = id => async dispatch => {
    const response = await catalogs.get(`/catalogs/${id}`);
    dispatch({ type: FETCH_CATALOG, payload: response.data });
};

export const deleteCatalog = id => async dispatch => {
    await catalogs.delete(`/catalogs/${id}`);
    dispatch({ type: DELETE_CATALOG, payload: id });
    history.push('/catalogs');
};

export const setCatalogOffset = catalogOffset => async dispatch => {
    dispatch({ type: SET_CATALOG_OFFSET, payload: catalogOffset });
};

export const setCatalogPageSize = pageSize => async dispatch => {
    dispatch({ type: SET_CATALOG_PAGE_SIZE, payload: pageSize });
};

export const addCatalogSortingCriteriaSortBy = (sortBy) => async dispatch => {
    dispatch({ type: ADD_CATALOG_SORTING_CRITERIA_SORT_BY, payload: sortBy });
};

export const addCatalogSortingCriteriaSortType = (ascOrDesc) => async dispatch => {
    dispatch({ type: ADD_CATALOG_SORTING_CRITERIA_SORT_TYPE, payload: ascOrDesc });
};

export const setCatalogSearchKeyword = (search) => async dispatch => {
    dispatch({ type: CATALOG_SEARCH_KEYWORD, payload: search });
};

export const addCourseToCatalog = (crsId, catalogId) => async dispatch => {
    const response = await catalogs.get(`/catalogs/addcoursetocatalog/${catalogId}/${crsId}`);
    dispatch({ type: ADD_COURSE_TO_CATALOG, payload: response.data });
};

export const removeCourseFromCatalog = (crsId, catalogId) => async dispatch => {
    const response = await catalogs.get(`/catalogs/removecoursefromcatalog/${catalogId}/${crsId}`);
    dispatch({ type: REMOVE_COURSE_FROM_CATALOG, payload: response.data });
};

export const assignCopyToPatron = (catalogId, copyId, patronId) => async dispatch => {
    await catalogs.get(`/patrons/${patronId}/assigncopytopatron/${copyId}`);
    history.push(`/catalogs/${catalogId}/assigncopytopatron/${copyId}`);
};

export const returnCopyToShelf = (catalogId, copyId) => async dispatch => {
    await catalogs.get(`/catalogcopies/returntoshelf/${copyId}`);
    history.push(`/catalogs/${catalogId}`);
};







export const fetchCourses = (offset, pageSize, sortBy, ascOrDesc, search) => async dispatch => {
    let url = `/courses?page=${offset}&size=${pageSize}&sort=${sortBy},${ascOrDesc}`;
    if(search){
        url = `/courses?page=${offset}&size=${pageSize}&sort=${sortBy},${ascOrDesc}&search=crsCde:${search}`;
    }
    const response = await catalogs.get(url);
    dispatch({ type: FETCH_COURSE_PAGE_COUNT, payload: response.data.totalPages });
    dispatch({ type: FETCH_COURSES, payload: response.data.content });
};

export const fetchCourse = id => async dispatch => {
    const response = await catalogs.get(`/catalogs/${id}`);
    dispatch({ type: FETCH_COURSE, payload: response.data });
};

export const setCourseOffset = offset => async dispatch => {
    dispatch({ type: SET_COURSE_OFFSET, payload: offset });
};

export const setCoursePageSize = pageSize => async dispatch => {
    dispatch({ type: SET_COURSE_PAGE_SIZE, payload: pageSize });
};

export const addCourseSortingCriteriaSortBy = (sortBy) => async dispatch => {
    dispatch({ type: ADD_COURSE_SORTING_CRITERIA_SORT_BY, payload: sortBy });
};

export const addCourseSortingCriteriaSortType = (ascOrDesc) => async dispatch => {
    dispatch({ type: ADD_COURSE_SORTING_CRITERIA_SORT_TYPE, payload: ascOrDesc });
};

export const setCourseSearchKeyword = (search) => async dispatch => {
    dispatch({ type: COURSE_SEARCH_KEYWORD, payload: search });
};




export const editPatron = (idNum, formValues) => async dispatch => {
    const response = await catalogs.put(`/patrons/${idNum}`, formValues);
    dispatch({ type: EDIT_PATRON, payload: response.data });
    history.push('/');
};

export const fetchPatrons = (patronOffset, patronPageSize, patronSortBy, patronAscOrDesc, patronSearch) => async dispatch => {
    let url = `/patrons?page=${patronOffset}&size=${patronPageSize}&sort=${patronSortBy},${patronAscOrDesc}`;
    if(patronSearch){
        url = `/patrons?page=${patronOffset}&size=${patronPageSize}&sort=${patronSortBy},${patronAscOrDesc}&search=lastName:${patronSearch}`;
    }
    const response = await catalogs.get(url);
    dispatch({ type: FETCH_PATRON_PAGE_COUNT, payload: response.data.totalPages });
    dispatch({ type: FETCH_PATRONS, payload: response.data.content });
};

export const fetchPatron = idNum => async dispatch => {
    const response = await catalogs.get(`/patrons/${idNum}`);
    dispatch({ type: FETCH_PATRON, payload: response.data });
};

export const setPatronOffset = patronOffset => async dispatch => {
    dispatch({ type: SET_PATRON_OFFSET, payload: patronOffset });
};

export const setPatronPageSize = pageSize => async dispatch => {
    dispatch({ type: SET_PATRON_PAGE_SIZE, payload: pageSize });
};

export const addPatronSortingCriteriaSortBy = (sortBy) => async dispatch => {
    dispatch({ type: ADD_PATRON_SORTING_CRITERIA_SORT_BY, payload: sortBy });
};

export const addPatronSortingCriteriaSortType = (ascOrDesc) => async dispatch => {
    dispatch({ type: ADD_PATRON_SORTING_CRITERIA_SORT_TYPE, payload: ascOrDesc });
};

export const setPatronSearchKeyword = (search) => async dispatch => {
    dispatch({ type: PATRON_SEARCH_KEYWORD, payload: search });
};
