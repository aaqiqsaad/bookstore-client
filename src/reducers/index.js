import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import tokenReducer from './tokenReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    tokens: tokenReducer
});