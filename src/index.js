import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'
import { LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'

ReactDOM.render(
  <BrowserRouter>
    <LocaleProvider locale={zh_CN}>
      <App/>
    </LocaleProvider>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
