import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Your global CSS styles (optional)
import AppRoutes from './AppRoutes'; // Import the App component which contains your routes

// Create the root element and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);