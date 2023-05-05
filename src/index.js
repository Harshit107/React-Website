import React from 'react';
import ReactDOM from 'react-dom/client';
import './theme/theme-style.css'
import './index.css';
// import ThemeChamger from './component/ThemeManager/ThemeChanger';
import HomePage from './HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HomePage/>
  </React.StrictMode>
);
