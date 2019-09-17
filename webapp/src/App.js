import React, { Component } from 'react';
import { Provider } from 'react-redux';

import SideBar from './components/SideBar';
import Video from './components/Video';

import store from './store';

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Video />
          <SideBar />
        </Provider>
      </div>
    );
  }
}
