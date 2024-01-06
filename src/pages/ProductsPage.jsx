import React, { useContext, useEffect, useState } from 'react'
import { FavoritesContext } from '../context/FavoritesContext'
import { CartContext } from '../context/CartContext'
import { cartStorageHelper } from '../utils/cartStorageHelper'

function ProductsPage() {
    const [products, setproducts] = useState([])

    //usecontext aracılığıyla global state e bağlanıyorum
    const { favorites, setfavorites } = useContext(FavoritesContext)
    const { cart, setcart } = useContext(CartContext)

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
        let productCheck = cart.find(p => p.id === product.id)

        if (productCheck) {
            productCheck.quantity += 1
            setcart([...cart])
            cartStorageHelper.setCart([...cart])
        }
        else {
            let cartItem = {
                id: product.id,
                name: product.name,
                quantity: 1,
                unitPrice: product.unitPrice,
           }

            setcart([...cart, cartItem])
            cartStorageHelper.setCart([...cart, cartItem])
        }
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