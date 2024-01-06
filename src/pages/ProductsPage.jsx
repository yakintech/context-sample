import React, { useContext, useEffect, useState } from 'react'
import { FavoritesContext } from '../context/FavoritesContext'

function ProductsPage() {
    const [products, setproducts] = useState([])

    const { favorites, setfavorites } = useContext(FavoritesContext)

    useEffect(() => {
        fetch('https://northwind.vercel.app/api/products')
            .then(res => res.json())
            .then(json => setproducts(json))

    }, [])

    const favOperation = (product) => {
        //ürün eğer favorilerde varsa favorilerden çıkar yoksa favorilere ekle

        let productCheck = favorites.find(p => p.id === product.id)

        if (productCheck) {
            let filteredProducts = favorites.filter(p => p.id !== product.id)
            setfavorites(filteredProducts)
        }
        else {
            setfavorites([...favorites, product])
        }
    }


    return (<>
        <table>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Unit Price</th>
                    <th>Quantity Per Unit</th>
                    <th>Units In Stock</th>
                    <th>Fav</th>
                </tr>
                {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.unitPrice}</td>
                        <td>{product.quantityPerUnit}</td>
                        <td>{product.unitsInStock}</td>
                        <td><button onClick={() => favOperation(product)}>
                        {
                            favorites.find(p => p.id === product.id) ? "Remove" : "Add to Favorites"
                        
                        }
                        </button>    </td>
                    </tr>
                ))}
            </thead>
        </table>
    </>
    )
}

export default ProductsPage