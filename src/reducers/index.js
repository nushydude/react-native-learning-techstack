import { combineReducers } from 'redux';

import libraryReducer from './libraryReducer';
import selectionReducer from './selectionReducer';

const rootReducer = combineReducers({
  libraries: libraryReducer,
  selectedId: selectionReducer,
});

export default rootReducer;
