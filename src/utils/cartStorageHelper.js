
export const cartStorageHelper = {
    setCart: (cart) => {
        localStorage.setItem('cart', JSON.stringify(cart))
    },
    getCart: () => {
        return JSON.parse(localStorage.getItem('cart'))
    },
    emptyCart: () => {
        localStorage.removeItem('cart')
    }
}