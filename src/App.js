import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import {
  View,
} from 'react-native';


import reducers from './reducers';

import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const styles = {
  appStyle: {
    flex: 1,
  },
};

export default () => (
  <Provider store={createStore(reducers)}>
    <View style={styles.appStyle}>
      <Header title="Tech Stack" />
      <LibraryList />
    </View>
  </Provider>
);
