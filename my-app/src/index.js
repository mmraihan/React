import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const todoTitle = "This is title";
const todoDesc = "This is Description";
const date =new Date();
const currentYear = date.getFullYear();
root.render(
 <div>
   <h1>Todo app</h1>
   <h3>Call Family</h3>
   <h3>{todoTitle}</h3>
   <p>{currentYear}</p>

 </div>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
