import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import colorContext from './context/colorContext';



ReactDOM.render(
  <React.StrictMode>
    <colorContext.Provider value={{state: {
  title: 'Tha E commerce',
  nombre: 'James',
  apellido: 'Rosas',
  edad: 27,
  color: 'cyan'
}}}>
      <App />
    </colorContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
