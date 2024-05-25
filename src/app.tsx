import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(){
    return (
        <div className="App-Header">
            <img src={logo} className='App-logo' alt="logo" />
            <p>
                Edit <code>src/App.tsx</code> and save to reload
            </p>
            <a
            className="App-link"
            href=""
            target=''
            rel=""
            >
                Learn React
            </a>
        </div>
    )
}