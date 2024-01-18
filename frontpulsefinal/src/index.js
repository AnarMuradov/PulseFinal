import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WishListProvider from './Context/WishListContext';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WishListProvider>
    <HelmetProvider>
    <App />
    </HelmetProvider>
    </WishListProvider>
  </React.StrictMode>
);

