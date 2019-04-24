import tokens from '../apis/tokens';
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_TOKEN,
    FETCH_TOKEN,
    FETCH_TOKENS,
    DELETE_TOKEN,
    EDIT_TOKEN
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

export const createToken = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const createdBy = userId;
    const response = await tokens.post('/tokens', { ...formValues, createdBy });
    dispatch({ type: CREATE_TOKEN, payload: response.data });
    history.push('/');
};

export const editToken = (id, formValues) => async dispatch => {
    const response = await tokens.put(`/tokens/${id}`, formValues);
    dispatch({ type: EDIT_TOKEN, payload: response.data });
    history.push('/');
};

export const fetchTokens = () => async dispatch => {
    const response = await tokens.get('/tokens');
    dispatch({ type: FETCH_TOKENS, payload: response.data });
};

export const fetchToken = id => async dispatch => {
    const response = await tokens.get(`/tokens/${id}`);
    dispatch({ type: FETCH_TOKEN, payload: response.data });
};

export const deleteToken = id => async dispatch => {
    await tokens.delete(`/tokens/${id}`);
    dispatch({ type: DELETE_TOKEN, payload: id });
    history.push('/');
};

