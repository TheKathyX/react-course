import React from 'react';
import ReactDOM from 'react-dom';
import './inde.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Simple from './simple';

ReactDOM.render(
    <React.StrictMode>
        <Simple />
    </React.StrictMode>,
    document.getElementById('root')
);

// if you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more
reportWebVitals();