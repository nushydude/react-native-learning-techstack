import { SELECT_LIBRARY_ID } from './../actions/types';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_LIBRARY_ID:
      return action.payload;
    default:
      return state;
  }
};
