import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./assets/js/script";
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/fonts/Satisfy/Satisfy-Regular.ttf'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
