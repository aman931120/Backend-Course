import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

// createRoot is basically expecting that get a element from html and return it to me
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <App />


);

