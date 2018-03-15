import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import StackNavigator from './src/router/StackNavigator';
import reducer from './src/store/reducer';

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StackNavigator />
      </Provider>
    );
  }
}
