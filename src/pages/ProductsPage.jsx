import React, { useContext, useEffect, useState } from 'react'
import { FavoritesContext } from '../context/FavoritesContext'
import { CartContext } from '../context/CartContext'
import { cartStorageHelper } from '../utils/cartStorageHelper'

function ProductsPage() {
    const [products, setproducts] = useState([])

    //usecontext aracılığıyla global state e bağlanıyorum
    const { favorites, setfavorites } = useContext(FavoritesContext)
    const { addToCartItem } = useContext(CartContext)

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

    const addToCart = (product) => {
        addToCartItem(product)
    }


    return (<>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Product Name</th>
                    <th>Unit Price</th>
                    <th>Quantity Per Unit</th>
                    <th>Units In Stock</th>
                    <th>Fav</th>
                    <th>Cart</th>
                </tr>
                {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.unitPrice}</td>
                        <td>{product.quantityPerUnit}</td>
                        <td>{product.unitsInStock}</td>
                        <td><button onClick={() => favOperation(product)}>
                            {
                                favorites.find(p => p.id === product.id) ? "Remove" : "Add to Favorites"

                            }
                        </button>    </td>
                        <td><button onClick={() => addToCart(product)}>Add to Cart</button></td>
                    </tr>
                ))}
            </thead>
        </table>
    </>
    )
}

export default ProductsPage