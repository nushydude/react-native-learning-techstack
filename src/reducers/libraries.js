import { FETCH_LIBRARIES } from './../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_LIBRARIES:
      return action.payload;
    default:
      return state;
  }
};
