import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import catalogReducer from './catalogReducer';
import pagingReducer from './pagingReducer';
import courseReducer from './courseReducer';
import patronReducer from './patronReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    catalogs: catalogReducer,
    paging: pagingReducer,
    courses: courseReducer,
    patrons: patronReducer
});