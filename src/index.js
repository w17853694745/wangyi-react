import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'lib-flexible';
import {Provider} from 'react-redux'
import store from './redux/store'
import './setupProxy'
//模拟数据
import './mockServe/index'

ReactDOM.render((
  < Provider store={store}>
    <App/>
  </Provider>
), document.getElementById('root'));
