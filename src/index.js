import React from 'react';
import ReactDOM from 'react-dom';
import "normalize.css";
import './index.css';

import "./media/boxicons-2.0.9/css/boxicons.min.css";

import App from "./components/App";
import "./sass/index.scss";




ReactDOM.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


