import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Reducer, {initialState} from './store/Reducer';
import { StateProvider } from './store/StateProvider';
import './index.css';
                                                                         
ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState = {initialState} reducer = {Reducer}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

          