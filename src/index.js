import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ResetCSS from './ResetCSS';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ResetCSS/>
        <App/>
    </React.StrictMode>
);
