import catalogs from '../apis/catalogs';
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_CATALOG,
    FETCH_CATALOG,
    FETCH_CATALOGS,
    DELETE_CATALOG,
    EDIT_CATALOG
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

export const fetchCatalogs = () => async dispatch => {
    const response = await catalogs.get('/catalogs');
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

