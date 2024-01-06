import React, { useContext, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import FavoritesPage from './pages/FavoritesPage'
import { FavoritesContext } from './context/FavoritesContext'

function App() {

  const { favorites } = useContext(FavoritesContext)


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
    </ul>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  </>
  )
}

export default App