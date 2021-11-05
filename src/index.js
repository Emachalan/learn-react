import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FamilyParent from './ChildCom';

ReactDOM.render(
  <React.StrictMode>
    <FamilyParent name={10} age={'12'}/>
  </React.StrictMode>,
  document.getElementById('roo2t')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();