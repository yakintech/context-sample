import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesContextProvider } from './context/FavoritesContext';
import { CartContextProvider } from './context/CartContext';
import { UserListContextProvider } from './context/UserListContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserListContextProvider>
      <CartContextProvider>
        <FavoritesContextProvider>
          <App />
        </FavoritesContextProvider>
      </CartContextProvider>
    </UserListContextProvider>


  </BrowserRouter>
);

