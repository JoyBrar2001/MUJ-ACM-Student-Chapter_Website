/** 
 * FileName - main.jsx
 * FileType - .jsx (React Js file)
 * Lines - 24
 * Created On - 15/8/2023, 01:19:20
 * Author - Joy Brar
 * See - https://github.com/JoyBrar2001/MUJ-ACM-Student-Chapter_Website
 * Description - main file for the website 
 * ///////// DO NOT MODIFY ///////////
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>  
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);