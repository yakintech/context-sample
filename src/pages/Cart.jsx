import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { cartStorageHelper } from '../utils/cartStorageHelper';

function Cart() {

    const { cart, setcart } = useContext(CartContext)

    let totalPrice = 0;


    cart.map(product => (
        totalPrice += product.quantity * product.unitPrice
    ))

    const remove = (id) => {
        let filteredProducts = cart.filter(p => p.id !== id)
        setcart(filteredProducts)
        cartStorageHelper.setCart(filteredProducts)
    }

    const empty = () => {
        setcart([])
        cartStorageHelper.emptyCart()
    }
    
  return (<>
  <h1>Total Price {totalPrice.toFixed(2)}</h1>
  <button onClick={empty} >Empty</button>
  <ul>
    {cart.map(product => (
      <li key={product.id}>
        {product.name} - {product.quantity} * {product.unitPrice.toFixed(2)} = {(product.quantity * product.unitPrice).toFixed(2)}
        <button onClick={() => remove(product.id)}>Remove</button>
        </li>
    ))}
  </ul>
  </>
  )
}

export default Cart