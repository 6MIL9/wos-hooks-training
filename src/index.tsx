import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

export type UsersType = Array<[number, number]>

const users: UsersType = [
    [40, 20],
    [14, 10],
    [3, 7]
]

ReactDOM.render(<App users={users} />, document.getElementById('root'));

reportWebVitals();
