import _ from 'lodash';
import {
    FETCH_TOKEN,
    FETCH_TOKENS,
    EDIT_TOKEN,
    DELETE_TOKEN,
    CREATE_TOKEN
} from "../actions/types";



export default (state = {}, action) => {
  switch(action.type) {
      case FETCH_TOKEN:
          return { ...state, [action.payload.id]: action.payload };
      case FETCH_TOKENS:
          return { ...state, ..._.mapKeys(action.payload, 'id')};
      case EDIT_TOKEN:
          return { ...state, [action.payload.id]: action.payload };
      case DELETE_TOKEN:
          return _.omit(state, action.payload);
      case CREATE_TOKEN:
          return { ...state, [action.payload.id]: action.payload };
      default:
          return state;
  }
};