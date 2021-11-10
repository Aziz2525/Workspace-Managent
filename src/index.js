import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from "./redux/store";
import App from './App';
import { Provider as ReduxProvider, useSelector } from "react-redux";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
