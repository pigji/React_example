import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//react-router-dom에 내장되어 있는 BrowserRouter컴포넌트
import{BrowserRouter} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  
  </BrowserRouter>
);


