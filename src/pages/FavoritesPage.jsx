import React, { useContext } from 'react'
import { FavoritesContext } from '../context/FavoritesContext'

function FavoritesPage() {

    const { favorites, setfavorites } = useContext(FavoritesContext)

    const remove = (product) => {
        let filteredProducts = favorites.filter(p => p.id !== product.id)
        setfavorites(filteredProducts)
    }

    const emptyFavorites = () => {
        setfavorites([])
    }
    

  return (<>
    <h1>Favorites Page</h1>
    <h1>Lengt: {favorites.length}</h1>
    <button onClick={emptyFavorites}>Empty Favorites</button>
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Unit Price</th>
          <th>Quantity Per Unit</th>
          <th>Units In Stock</th>
        </tr>
        {favorites.map(product => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.unitPrice}</td>
            <td>{product.quantityPerUnit}</td>
            <td>{product.unitsInStock}</td>
            <td><button onClick={() => remove(product)}>Remove</button></td>
          </tr>
        ))}
      </thead>
    </table>
  </>
  )
}

export default FavoritesPage