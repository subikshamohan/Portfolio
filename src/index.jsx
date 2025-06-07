import React from 'react';
import ReactDOM from 'react-dom/client'; // change here
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // create root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance measuring (optional)
reportWebVitals();
