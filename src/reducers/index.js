import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import catalogReducer from './catalogReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    catalogs: catalogReducer
});