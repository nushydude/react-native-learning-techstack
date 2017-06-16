import {
  FETCH_LIBRARIES,
  SELECT_LIBRARY_ID,
} from './types';

import data from './../data/LibraryList.json';

export const actionFetchLibraries = () => ({
  type: FETCH_LIBRARIES,
  payload: data,
});

export const actionSelectLibrary = id => ({
  type: SELECT_LIBRARY_ID,
  payload: id,
});
