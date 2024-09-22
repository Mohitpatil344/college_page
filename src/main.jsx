// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// src/main.jsx
import './index.css';  // Ensure this is correctly pointing to your CSS file

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
