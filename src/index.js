import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {firstName as myvalue,
  duplicate as duplicate2} from './person';

document.getElementById("app").innerHTML = '${firstName} ${age} ${duplicate{2}}';