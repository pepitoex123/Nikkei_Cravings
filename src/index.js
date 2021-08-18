import React from 'react';
import ReactDOM from 'react-dom';
import "normalize.css";
import './index.css';

import "./media/boxicons-2.0.9/css/boxicons.min.css";

import Layout from "./components/Layout";
import "./sass/index.scss";




ReactDOM.render(
  <React.StrictMode>
      <Layout/>
  </React.StrictMode>,
  document.getElementById('root')
);


