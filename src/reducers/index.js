import { combineReducers } from 'redux';

import libraryReducer from './libraries';
import selectedLibraryIdReducer from './selected_library_id';

const rootReducer = combineReducers({
  libraries: libraryReducer,
  selectedLibraryId: selectedLibraryIdReducer,
});

export default rootReducer;
