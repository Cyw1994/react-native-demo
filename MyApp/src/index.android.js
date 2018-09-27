import React, { Component } from 'react';
import configureStore from './store/ConfigureStore';
import {Provider} from 'react-redux';

import App from './container/App';


const myStore = configureStore();

class MyApp extends Component {
  render(){
    return(
      <Provider store={myStore}>
        <App />
      </Provider>
    )
    
  }
}

export default MyApp;