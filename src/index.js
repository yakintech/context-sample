import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesContextProvider } from './context/FavoritesContext';
import { CartContextProvider } from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CartContextProvider>
      <FavoritesContextProvider>
        <App />
      </FavoritesContextProvider>
    </CartContextProvider>

  </BrowserRouter>
);

