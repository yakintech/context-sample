import React, { useContext, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import FavoritesPage from './pages/FavoritesPage'
import { FavoritesContext } from './context/FavoritesContext'
import Cart from './pages/Cart'
import { CartContext } from './context/CartContext'
import UserListPage from './pages/UserListPage'
import AddUser from './pages/AddUser'


function App() {

  const { favorites } = useContext(FavoritesContext)
  const { cart } = useContext(CartContext)


  return (<>
    <ul style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/favorites">Favorites
        {
          favorites.length > 0 ? (<span style={{ color: 'red' }}>
            ({favorites.length})</span>)
            : <></>
        }

      </Link>
      <Link to="/cart">Cart
        {
          cart.length > 0 ? (<span style={{ color: 'red' }}>
            ({cart.length})</span>)
            : <></>
        }
      </Link>
      <Link to="/userlist">UserList</Link>
      <Link to="/adduser">AddUser</Link>
    </ul>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/userlist' element={<UserListPage />} />
      <Route path='/adduser' element={<AddUser />} />
      <Route path="*" element={<h1>Not Found 404</h1>} />
    </Routes>
  </>
  )
}

export default App